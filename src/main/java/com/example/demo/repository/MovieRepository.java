package com.example.demo.repository;


import com.example.demo.model.cinema.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface MovieRepository extends JpaRepository<Movie, UUID> {


    List<Movie> findByGenreIgnoreCase(String genre);
}
