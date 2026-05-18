package com.example.demo.model.cinema;

import com.example.demo.model.cinema.Hall;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
public class Screening {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long tmdbMovieId;

    @ManyToOne
    private Hall hall;

    private LocalDateTime startTime;

    private double price;
}