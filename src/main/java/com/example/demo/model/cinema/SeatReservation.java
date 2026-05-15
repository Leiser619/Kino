package com.example.demo.model.cinema;


import com.example.demo.model.User;
import jakarta.persistence.*;
import lombok.Data;


@Entity
@Data
public class SeatReservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int rowNumber;
    private int columnNumber;
    @ManyToOne
    private Screening screening;

    @ManyToOne
    private User owner;
}