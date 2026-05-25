package com.example.demo.dto.auth;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class AdminStatsDto {

    private long todayScreenings;

    private double occupiedSeatsPercent;

    private long activeHalls;

    private List<String> busyHalls;
}