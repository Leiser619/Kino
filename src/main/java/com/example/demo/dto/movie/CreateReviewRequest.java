package com.example.demo.dto.movie;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;

public record CreateReviewRequest(

        @NotBlank
        String tmdbId,

        String content,

        @Min(1)
        @Max(10)
        int rating

) {}