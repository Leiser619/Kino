package com.example.demo.dto.movie;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class MovieDto {

    private Long tmdbId;

    private String imdbId;

    private String title;

    private int duration;

    private String posterUrl;

    private String trailerUrl;

    private String description;

    private String releaseDate;

    private String director;

    private String genre;

    private String originalLanguage;

    private String imdbRating;

    private String searchKey;
}