package com.example.demo.dto.movie;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class CreateScreeningRequest {
    private Long tmdbMovieId;
    private Long hallId;
    private LocalDateTime startTime;
    private double price;
}