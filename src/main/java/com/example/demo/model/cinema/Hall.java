package com.example.demo.model.cinema;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Hall {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private int rows;

    @Column(nullable = false)
    private int columns;

    @Column(nullable = false)
    private String type;
}