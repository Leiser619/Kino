package com.example.demo.repository;


import com.example.demo.model.cinema.Screening;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;


public interface ScreeningRepository extends JpaRepository<Screening, Long> {


}
