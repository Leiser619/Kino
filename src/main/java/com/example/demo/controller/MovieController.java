package com.example.demo.controller;

import com.example.demo.dto.movie.MovieDto;
import com.example.demo.model.cinema.Movie;
import com.example.demo.service.TmdbService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/movies")
@RequiredArgsConstructor
public class MovieController {
    private final TmdbService  tmdbService;

    @GetMapping("/now-playing")
    public List<MovieDto> getNowPlayingMovies() {
        return tmdbService.getNowPlayed();
    }


    @GetMapping("/trending")
    public List<MovieDto> getMoviesByCategory() {
        return tmdbService.getTrending();
    }


    @GetMapping("/family")
    public List<MovieDto> getFamilyMovies() {
        return tmdbService.getFamilyMovies();
    }

    @GetMapping("/search/{searchKey}")
    public MovieDto getMovie(
            @PathVariable("searchKey") String searchKey
    ) {
        return tmdbService.getMovieByImdbId(searchKey);
    }
    @GetMapping("/search/title/{query}")
    public MovieDto searchMovieByTitle(
            @PathVariable("query") String query
    ) {

        return tmdbService.searchMovieByTitle(query);
    }
    @GetMapping("/tmdb/{id}")
    public MovieDto getMovieByTmdbId(
            @PathVariable("id") Long id
    ) {
        return tmdbService.getMovieByTmdbId(id);
    }
}
