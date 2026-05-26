package com.example.demo.service.tools;

import com.example.demo.repository.ScreeningRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class ScreeningCleanupService {

    private final ScreeningRepository screeningRepository;

    @Scheduled(cron = "0 0 3 * * *")
    public void deleteExpiredScreenings() {

        screeningRepository
                .deleteByStartTimeBefore(
                        LocalDateTime.now()
                );
    }
}