package com.example.demo.controller;

import com.example.demo.dto.movie.CreateReservationRequest;
import com.example.demo.model.cinema.Reservation;
import com.example.demo.service.ReservationService;
import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/reservations")
@RequiredArgsConstructor
public class ReservationController {

    private final ReservationService reservationService;
    @PostMapping
    public List<Reservation> reserve(
            @RequestBody CreateReservationRequest req
    ) throws MessagingException {
        return reservationService.reserve(req);
    }

    @GetMapping("/screening/{screeningId}")
    public List<Reservation> getByScreening(
            @PathVariable("screeningId") Long screeningId
    ) {
        return reservationService
                .getByScreening(screeningId);
    }

}
