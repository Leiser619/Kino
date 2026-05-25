package com.example.demo.repository;


import com.example.demo.model.cinema.Screening;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;


public interface ScreeningRepository extends JpaRepository<Screening, Long> {

    List<Screening> findByStartTimeAfter(LocalDateTime now);

    void deleteByStartTimeBefore(LocalDateTime now);


    long countByStartTimeBetween(
            LocalDateTime start,
            LocalDateTime end
    );

    List<Screening> findByStartTimeBetween(
            LocalDateTime start,
            LocalDateTime end
    );

}
