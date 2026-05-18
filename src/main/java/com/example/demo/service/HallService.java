package com.example.demo.service;

import com.example.demo.model.cinema.Hall;
import com.example.demo.repository.HallRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class HallService {

    private final HallRepository hallRepository;


    public Hall addHall(Hall hall){
       return hallRepository.save(hall);
    }

    public List<Hall> getHalls(){
        return hallRepository.findAll();
    }
}
