package com.example.demo.dto.movie;// TmdbFindResponse.java


import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class TmdbFindResponse {

    @JsonProperty("movie_results")
    private List<TmdbMovieDto> movieResults;
}