package com.example.demo.controller;

import com.example.demo.dto.movie.CreateScreeningRequest;
import com.example.demo.model.cinema.Screening;
import com.example.demo.service.ScreeningService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/screenings")
@RequiredArgsConstructor
public class ScreeningController {

    private final ScreeningService screeningService;

    @PostMapping
    public Screening create(@RequestBody CreateScreeningRequest req) {
        return screeningService.create(req);
    }

    @GetMapping()
    public List<Screening> getScreenings(){

        System.out.println("siemna");
        return screeningService.findAll();
    }


    @GetMapping("/{id}")
    public Optional<Screening> getScreeningsById(@PathVariable("id") Long id){
        return screeningService.findById(id);
    }
}