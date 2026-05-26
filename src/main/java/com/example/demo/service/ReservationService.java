package com.example.demo.service;

import com.example.demo.dto.movie.CreateReservationRequest;
import com.example.demo.dto.movie.MovieDto;
import com.example.demo.model.cinema.Reservation;
import com.example.demo.model.cinema.Screening;
import com.example.demo.repository.ReservationRepository;
import com.example.demo.repository.ScreeningRepository;
import com.example.demo.service.tools.MailService;
import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class ReservationService {

    private final MailService mailService;

    private final ReservationRepository reservationRepository;

    private final ScreeningRepository screeningRepository;

    private final TmdbService tmdbService;

    public List<Reservation> reserve(
            CreateReservationRequest req
    ) throws MessagingException {

        String mailTo =
                req.getOwnerEmail();

        Screening screening =
                screeningRepository
                        .findById(
                                req.getScreeningId()
                        )
                        .orElseThrow();



        MovieDto movie =
                tmdbService.getMovieByTmdbId(
                        screening.getTmdbMovieId()
                );



        List<Reservation> reservations =
                req.getSeats()
                        .stream()
                        .map(seat -> {

                            Reservation reservation =
                                    new Reservation();

                            reservation.setRowNumber(
                                    seat.getRowNumber()
                            );

                            reservation.setColumnNumber(
                                    seat.getColumnNumber()
                            );

                            reservation.setScreening(
                                    screening
                            );

                            reservation.setOwnerEmail(
                                    req.getOwnerEmail()
                            );

                            return reservation;
                        })
                        .toList();

        reservationRepository.saveAll(
                reservations
        );



        String seatsHtml =
                reservations.stream()

                        .map(r -> """
                            <div class="ticket">
                                🎟️ Rząd %d • Miejsce %d
                            </div>
                        """.formatted(
                                r.getRowNumber(),
                                r.getColumnNumber()
                        ))

                        .collect(
                                Collectors.joining()
                        );



        double totalPrice =
                reservations.size() * 24;



        String html = """
                <!DOCTYPE html>
                <html>

                <head>

                  <style>

                    body {
                      font-family: Arial, sans-serif;
                      background-color: white;
                      color: black;
                      padding: 40px;
                    }

                    .container {
                      max-width: 600px;
                      margin: auto;
                      background: white;
                      border-radius: 24px;
                      padding: 40px;
                      border: 1px solid #27272a;
                    }

                    .logo {
                      font-size: 32px;
                      font-weight: bold;
                      color:black;
                      margin-bottom: 30px;
                    }

                    .movie {
                      font-size: 24px;
                      margin-bottom: 25px;
                    }

                    .section-title {
                      margin-top: 30px;
                      margin-bottom: 15px;
                      font-size: 18px;
                      font-weight: bold;
                    }

                    .ticket {
                      background: white;
                      padding: 14px;
                      border-radius: 14px;
                      margin-bottom: 10px;
                    }

                    .price {
                      margin-top: 30px;
                      font-size: 26px;
                      font-weight: bold;
                      color: black;
                    }

                    .footer {
                      margin-top: 40px;
                      color: black;
                      font-size: 13px;
                    }

                  </style>

                </head>

                <body>

                  <div class="container">

                    <div class="logo">
                      CINEFILE 
                    </div>

                    <div class="movie">
                      Dziękujemy za zakup biletów na:
                      <br><br>
                      <b>%s</b>
                    </div>

                    <div class="section-title">
                      Zarezerwowane miejsca:
                    </div>

                    %s

                    <div class="price">
                      Łączna cena: %.2f PLN
                    </div>

                    <div class="footer">
                      Życzymy miłego seansu 
                    </div>

                  </div>

                </body>

                </html>
                """.formatted(
                movie.getTitle(),
                seatsHtml,
                totalPrice
        );


        mailService.sendHtmlMail(
                mailTo,
                html,
                "CINEFILE - Potwierdzenie rezerwacji"
        );

        return reservations;
    }

    public List<Reservation> getByScreening(
            Long screeningId
    ) {

        return reservationRepository
                .findByScreeningId(
                        screeningId
                );
    }
}