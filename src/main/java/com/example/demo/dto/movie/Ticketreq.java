package com.example.demo.dto.movie;

public record Ticketreq(
        int row,
        int col,
        Long screeningId,
        String ownerEmail,
        String ownerName,
        String ownerSurname
) {
}
