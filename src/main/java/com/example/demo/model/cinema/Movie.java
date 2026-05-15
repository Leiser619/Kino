package com.example.demo.model.cinema;

import jakarta.persistence.*;
import lombok.*;

import java.text.Normalizer;
import java.time.LocalDate;
import java.util.UUID;

@Entity
@Table(name = "movies")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "imdb_id", unique = true, nullable = false)
    private String imdbId;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private int duration;

    @Column(name = "poster_url", nullable = false)
    private String posterUrl;

    @Column(name = "trailer_url")
    private String trailerUrl;

    @Column(name = "description", columnDefinition = "TEXT")
    private String description;

    @Column(name = "release_date")
    private LocalDate releaseDate;

    @Column(name = "director")
    private String director;

    @Column(name = "genre")
    private String genre;

    @Column(name = "language")
    private String originalLanguage;

    @Column(name = "imdb_rating")
    private String imdbRating;

    @Column(name = "search_key", unique = true)
    private String searchKey;

}