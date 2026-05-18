package com.example.demo.controller;

import com.example.demo.dto.movie.CreateScreeningRequest;
import com.example.demo.model.cinema.Screening;
import com.example.demo.service.ScreeningService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/screenings")
@RequiredArgsConstructor
public class ScreeningController {

    private final ScreeningService screeningService;

    @PostMapping
    public Screening create(@RequestBody CreateScreeningRequest req) {
        return screeningService.create(req);
    }
}