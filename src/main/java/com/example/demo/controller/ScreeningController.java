package com.example.demo.controller;

import com.example.demo.service.ScreeningService;
import com.example.demo.dto.movie.ScreeningRes;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("api/admin_panel")
@RequiredArgsConstructor
public class ScreeningController {
    final private ScreeningService screeningService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void addScreening(@Valid @RequestBody ScreeningRes req) {
        screeningService.addScreening(req);
    }

    @GetMapping
    public List<ScreeningRes> getScreenings( ) {
        return screeningService.getScreenings();
    }

    @GetMapping("/btw")
    public List<ScreeningRes> getScreeningsBetween(@RequestParam LocalDateTime from,
                                                   @RequestParam LocalDateTime to){
        return screeningService.getScreeningsBetween(from,to);
    }

}
