package com.example.demo.service;

import com.example.demo.config.TmdbProperties;
import com.example.demo.dto.movie.MovieDto;
import com.example.demo.dto.movie.TmdbMovieDto;
import com.example.demo.dto.movie.TmdbNowPlayingResponse;
import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TmdbService {

    private final RestClient restClient;

    private final TmdbProperties tmdbProperties;

    public List<MovieDto> getNowPlayed() {

        TmdbNowPlayingResponse response = restClient.get()

                .uri(uriBuilder -> uriBuilder
                        .path("/movie/now_playing")
                        .queryParam("language", "en-US")
                        .queryParam("page", 1)
                        .build()
                )

                .header(
                        "Authorization",
                        "Bearer " + tmdbProperties.getApiKey()
                )

                .retrieve()

                .body(TmdbNowPlayingResponse.class);

        assert response != null;

        return response.getResults()

                .stream()

                .map(this::mapToMovieDto)

                .toList();
    }



    public List<MovieDto> getTrending() {

        TmdbNowPlayingResponse response = restClient.get()

                .uri(uriBuilder -> uriBuilder
                        .path("/trending/movie/day")
                        .queryParam("language", "en-US")
                        .queryParam("page", 1)
                        .build()
                )

                .header(
                        "Authorization",
                        "Bearer " + tmdbProperties.getApiKey()
                )

                .retrieve()

                .body(TmdbNowPlayingResponse.class);

        assert response != null;

        return response.getResults()

                .stream()

                .map(this::mapToMovieDto)

                .toList();
    }

//TODO TA METODE ZMIENIC NA POBIERANIE Z PARAMETREM
    public List<MovieDto> getFamilyMovies() {

        TmdbNowPlayingResponse response = restClient.get()

                .uri(uriBuilder -> uriBuilder

                        .path("/discover/movie")

                        .queryParam("with_genres", "10751")

                        .queryParam("language", "en-US")

                        .queryParam("sort_by", "popularity.desc")

                        .queryParam("page", 1)

                        .build()
                )

                .header(
                        "Authorization",
                        "Bearer " + tmdbProperties.getApiKey()
                )

                .retrieve()

                .body(TmdbNowPlayingResponse.class);

        assert response != null;

        return response.getResults()

                .stream()

                .map(this::mapToMovieDto)

                .toList();
    }











    //maper
    private MovieDto mapToMovieDto(
            TmdbMovieDto movie
    ) {

        return MovieDto.builder()

                .imdbId(String.valueOf(movie.getId()))

                .title(movie.getTitle())

                .description(movie.getOverview())

                .releaseDate(movie.getRelease_date())

                .originalLanguage(
                        movie.getOriginal_language()
                )

                .imdbRating(
                        String.valueOf(movie.getVote_average())
                )

                .posterUrl(
                        "https://image.tmdb.org/t/p/w500"
                                + movie.getPoster_path()
                )

                .duration(120)

                .genre("Unknown")

                .director("Unknown")

                .searchKey(
                        movie.getTitle()
                                .toLowerCase()
                                .replace(" ", "-")
                )

                .build();
    }
}