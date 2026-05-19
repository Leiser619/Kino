package com.example.demo.service;

import com.example.demo.config.TmdbProperties;
import com.example.demo.dto.movie.MovieDto;
import com.example.demo.dto.movie.TmdbFindResponse;
import com.example.demo.dto.movie.TmdbMovieDto;
import com.example.demo.dto.movie.TmdbListResponse;
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

        TmdbListResponse response = restClient.get()

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

                .body(TmdbListResponse.class);

        assert response != null;

        return response.getResults()

                .stream()

                .map(this::mapToMovieDto)

                .toList();
    }



    public List<MovieDto> getTrending() {

        TmdbListResponse response = restClient.get()

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

                .body(TmdbListResponse.class);

        assert response != null;

        return response.getResults()

                .stream()

                .map(this::mapToMovieDto)

                .toList();
    }

//TODO TA METODE ZMIENIC NA POBIERANIE Z PARAMETREM
    public List<MovieDto> getFamilyMovies() {

        TmdbListResponse response = restClient.get()

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

                .body(TmdbListResponse.class);

        assert response != null;

        return response.getResults()

                .stream()

                .map(this::mapToMovieDto)

                .toList();
    }

    public MovieDto getMovieByImdbId(
            String imdbId
    ) {

        TmdbFindResponse response =
                restClient.get()

                        .uri(uriBuilder -> uriBuilder

                                .path("/find/{external_id}")

                                .queryParam(
                                        "external_source",
                                        "imdb_id"
                                )

                                .queryParam(
                                        "language",
                                        "en-US"
                                )

                                .build(imdbId)
                        )

                        .header(
                                "Authorization",
                                "Bearer " + tmdbProperties.getApiKey()
                        )

                        .retrieve()

                        .body(TmdbFindResponse.class);

        assert response != null;

        if (
                response.getMovieResults()
                        .isEmpty()
        ) {

            throw new RuntimeException(
                    "Movie not found"
            );
        }

        return mapToMovieDto(
                response
                        .getMovieResults().get(0)

        );
    }





    public MovieDto getMovieByTmdbId(Long tmdbId) {

        TmdbMovieDto response = restClient.get()

                .uri(uriBuilder -> uriBuilder
                        .path("/movie/{movie_id}")
                        .queryParam("language", "en-US")
                        .build(tmdbId)
                )

                .header(
                        "Authorization",
                        "Bearer " + tmdbProperties.getApiKey()
                )

                .retrieve()

                .body(TmdbMovieDto.class);

        if (response == null) {
            throw new RuntimeException("Movie not found");
        }

        return mapToMovieDto(response);
    }





    //maper
    private MovieDto mapToMovieDto(
            TmdbMovieDto movie
    ) {

        return MovieDto.builder()

                .tmdbId(movie.getId())

                .imdbId(movie.getImdbId())

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