package com.example.demo.service;


import com.example.demo.dto.movie.CreateReviewRequest;
import com.example.demo.dto.movie.ReviewResponse;
import com.example.demo.model.cinema.Review;
import com.example.demo.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ReviewService {

    private final ReviewRepository reviewRepository;

    public ReviewResponse createReview(
            CreateReviewRequest request,
            Long ownerId
    ) {

        Review review = Review.builder()
                .tmdbId(request.tmdbId())
                .content(request.content())
                .rating(request.rating())
                .ownerId(ownerId)
                .createdAt(LocalDateTime.now())
                .build();

        Review savedReview =
                reviewRepository.save(review);

        return mapToResponse(savedReview);
    }

    public List<ReviewResponse> getMovieReviews(
            String tmdbId
    ) {

        return reviewRepository
                .findByTmdbIdOrderByCreatedAtDesc(
                        tmdbId
                )
                .stream()
                .map(this::mapToResponse)
                .toList();
    }

    private ReviewResponse mapToResponse(
            Review review
    ) {

        return new ReviewResponse(
                review.getId(),
                review.getTmdbId(),
                review.getContent(),
                review.getRating(),
                review.getCreatedAt(),
                review.getOwnerId()
        );
    }
}