package com.example.demo.model.cinema;


import com.example.demo.model.User;
import jakarta.persistence.*;
import lombok.Data;


@Entity
@Data
@Table(name="seat_reservation")
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name="row_number")
    private int rowNumber;
    @Column(name="column_number")
    private int columnNumber;
    @ManyToOne
    private Screening screening;
    @Column(name="owner_email")
    private String ownerEmail;
}