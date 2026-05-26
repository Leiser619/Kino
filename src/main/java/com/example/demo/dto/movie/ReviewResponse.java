package com.example.demo.dto.movie;


import java.time.LocalDateTime;

public record ReviewResponse(

        Long id,

        String tmdbId,

        String content,

        int rating,

        LocalDateTime createdAt,

        Long ownerId

) {}