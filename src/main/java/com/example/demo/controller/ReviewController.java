package com.example.demo.controller;

import com.example.demo.dto.movie.CreateReviewRequest;
import com.example.demo.dto.movie.ReviewResponse;
import com.example.demo.security.UserPrincipal;
import com.example.demo.service.ReviewService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("api/reviews")
@RequiredArgsConstructor
public class ReviewController {
    private final ReviewService reviewService;
    @PostMapping
    public ReviewResponse createReview(
            @Valid @RequestBody CreateReviewRequest request,
            @AuthenticationPrincipal UserPrincipal user
    ) {
        return reviewService.createReview(
                request,
                user.getId()
        );
    }

    @GetMapping("/{tmdbId}")
    public List<ReviewResponse> getReviews(
            @PathVariable("tmdbId") String tmdbId
    ) {

        return reviewService.getMovieReviews(
                tmdbId
        );
    }
}
