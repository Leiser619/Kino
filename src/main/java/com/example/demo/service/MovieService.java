package com.example.demo.service;

import com.example.demo.model.cinema.Movie;
import com.example.demo.repository.MovieRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class MovieService {
    private final MovieRepository movieRepository;

    public List<Movie> getAll(){
        System.out.println("tutaj dziala");
        return movieRepository.findAll();
    }

    public List<Movie> getByCategory(String category) {
        System.out.println("tutaj dziala 2");
        return movieRepository.findByGenreIgnoreCase(category);
    }
}
