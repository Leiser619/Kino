package com.example.demo.dto.movie;

import lombok.Data;

@Data
public class TmdbMovieDto {

    private Long id;

    private String title;

    private String overview;

    private String poster_path;

    private String release_date;

    private Double vote_average;

    private String original_language;
}