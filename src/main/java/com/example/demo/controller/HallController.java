package com.example.demo.controller;


import com.example.demo.model.cinema.Hall;
import com.example.demo.service.HallService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/hall")
@RequiredArgsConstructor
public class HallController {
    private final HallService hallService;
    @PostMapping()
    public Hall addHall(@RequestBody Hall hall){
        return hallService.addHall(hall);
    }
    @GetMapping
    public List<Hall> getHalls(){
        return hallService.getHalls();
    }
}
