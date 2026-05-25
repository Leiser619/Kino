package com.example.demo.dto.movie;

import lombok.Data;

import java.util.List;

@Data
public class CreateReservationRequest {

    private Long screeningId;
    private String ownerEmail;

    private List<SeatDto> seats;

    @Data
    public static class SeatDto {
        private int rowNumber;
        private int columnNumber;
    }
}