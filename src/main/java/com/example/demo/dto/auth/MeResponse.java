package com.example.demo.dto.auth;

public record MeResponse(
        Long id,
        String email,
        String role
) {}