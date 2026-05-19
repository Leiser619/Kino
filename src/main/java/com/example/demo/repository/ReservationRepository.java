package com.example.demo.repository;

import com.example.demo.model.cinema.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReservationRepository extends JpaRepository<Reservation,Long> {
    List<Reservation> findByScreeningId(Long screeningId);
}
