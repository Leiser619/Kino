package com.example.demo.model.cinema;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
@Entity
@Setter
@Getter
public class Screening {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "movie_id")
    private Movie movie;

    @ManyToOne(optional = false)
    @JoinColumn(name = "hall_id")
    private Hall hall;

    @Column(nullable = false , name = "start_time")
    private LocalDateTime startTime;

    @Column(nullable = false , name = "end_time")
    private LocalDateTime endTime;
}