package com.example.demo.controller;



import com.example.demo.dto.auth.AdminStatsDto;
import com.example.demo.service.AdminStatsService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api")
@RequiredArgsConstructor
public class AdminStatsController {

    private final AdminStatsService adminStatsService;

    @GetMapping("/admin_panel/stats")
    public AdminStatsDto getStats() {

        return adminStatsService.getStats();
    }
}