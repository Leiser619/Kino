package com.example.demo.repository;


import com.example.demo.model.cinema.Screening;
import com.example.demo.model.cinema.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface TicketRepository extends JpaRepository<Ticket,Long> {
    boolean existsByRowAndColAndScreening(int row, int col, Screening screening);

    List<Ticket> getAllByScreeningAndPaid(Screening screening,boolean paid);

    long count();
}
