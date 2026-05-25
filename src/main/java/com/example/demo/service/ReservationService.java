package com.example.demo.service;

import com.example.demo.dto.movie.CreateReservationRequest;
import com.example.demo.model.Role;
import com.example.demo.model.User;
import com.example.demo.model.cinema.Reservation;
import com.example.demo.model.cinema.Screening;
import com.example.demo.repository.ReservationRepository;
import com.example.demo.repository.ScreeningRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;


import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class ReservationService {


    private final ReservationRepository reservationRepository;

    private final ScreeningRepository screeningRepository;

    public List<Reservation> reserve(
            CreateReservationRequest req
    ) {

        //
        // SCREENING
        //

        Screening screening =
                screeningRepository
                        .findById(req.getScreeningId())
                        .orElseThrow();

        //
        // MAP DTO -> ENTITY
        //

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

                            reservation.setOwnerEmail(req.getOwnerEmail());

                            return reservation;
                        })
                        .toList();

        //
        // SAVE
        //

        return reservationRepository
                .saveAll(reservations);
    }

    public List<Reservation> getByScreening(
            Long screeningId
    ) {
        return reservationRepository
                .findByScreeningId(screeningId);
    }
}

