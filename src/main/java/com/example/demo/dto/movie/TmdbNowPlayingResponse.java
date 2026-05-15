package com.example.demo.dto.movie;

import lombok.Data;

import java.util.List;

@Data
public class TmdbNowPlayingResponse {

    private List<TmdbMovieDto> results;
}