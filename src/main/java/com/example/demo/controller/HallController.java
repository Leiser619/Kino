package com.example.demo.controller;


import com.example.demo.model.cinema.Hall;
import com.example.demo.service.HallService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/hall")
@RequiredArgsConstructor
public class HallController {
    private final HallService hallService;
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping()
    public Hall addHall(@RequestBody Hall hall){
        return hallService.addHall(hall);
    }
    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")
    public List<Hall> getHalls(){
        return hallService.getHalls();
    }
}
