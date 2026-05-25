package com.example.demo.service;
import com.example.demo.dto.auth.AdminStatsDto;
import com.example.demo.repository.HallRepository;
import com.example.demo.repository.ReservationRepository;
import com.example.demo.repository.ScreeningRepository;
import com.example.demo.repository.TicketRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AdminStatsService {

    private final ScreeningRepository screeningRepository;

    private final HallRepository hallRepository;

    private final ReservationRepository reservationRepository;

    public AdminStatsDto getStats() {

        LocalDateTime startOfDay =
                LocalDate.now()
                        .atStartOfDay();

        LocalDateTime endOfDay =
                LocalDate.now()
                        .atTime(23, 59, 59);

        long todayScreenings =
                screeningRepository
                        .countByStartTimeBetween(
                                startOfDay,
                                endOfDay
                        );


        long activeHalls =
                screeningRepository
                        .findByStartTimeAfter(
                                LocalDateTime.now()
                        )
                        .stream()
                        .map(s -> s.getHall().getId())
                        .distinct()
                        .count();



        List<String> busyHalls =
                screeningRepository
                        .findByStartTimeBetween(
                                LocalDateTime.now()
                                        .minusHours(3),

                                LocalDateTime.now()
                                        .plusHours(3)
                        )
                        .stream()
                        .map(s -> s.getHall().getName())
                        .distinct()
                        .toList();



        long totalSeats =
                hallRepository.findAll()
                        .stream()
                        .mapToLong(
                                hall ->
                                        (long) hall.getRows()
                                                * hall.getColumns()
                        )
                        .sum();

        long occupiedSeats =
                reservationRepository.count();

        double occupiedPercent = 0;

        if (totalSeats > 0) {

            occupiedPercent =
                    ((double) occupiedSeats
                            / totalSeats)
                            * 100;
        }

        return new AdminStatsDto(
                todayScreenings,
                Math.round(occupiedPercent),
                activeHalls,
                busyHalls
        );
    }
}