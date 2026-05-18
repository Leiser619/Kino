package com.example.demo.service;

import com.example.demo.dto.movie.CreateScreeningRequest;
import com.example.demo.model.cinema.Hall;
import com.example.demo.model.cinema.Screening;
import com.example.demo.repository.HallRepository;
import com.example.demo.repository.ScreeningRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ScreeningService {

    private final ScreeningRepository screeningRepository;
    private final HallRepository hallRepository;

    public Screening create(CreateScreeningRequest req) {

        Hall hall = hallRepository.findById(req.getHallId())
                .orElseThrow();

        Screening screening = new Screening();

        screening.setTmdbMovieId(req.getTmdbMovieId());
        screening.setHall(hall);
        screening.setStartTime(req.getStartTime());
        screening.setPrice(req.getPrice());

        return screeningRepository.save(screening);
    }
}