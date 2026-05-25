package com.example.demo.dto.auth;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record AddEmployeeRequest(

        @Email
        @NotBlank
        String email

) {}