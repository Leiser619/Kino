package com.example.demo.dto.movie;

import lombok.Data;

import java.util.List;

@Data
public class TmdbMovieResponse {

    private List<MovieResult> results;

    @Data
    public static class MovieResult {

        private Long id;

        private String title;

        private String overview;

        private String poster_path;

        private String release_date;

        private Double vote_average;
    }
}