package com.example.demo.model.cinema;


import com.example.demo.model.User;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    int row;
    int col;

    @ManyToOne(optional = false)
    @JoinColumn(name = "screening_id", nullable = false)
    private Screening screening;

    @ManyToOne
    @JoinColumn(name = "user_id")
    User owner;

    @Column(name="owner_email",nullable = false)
    String ownerEmail;


    boolean paid;
}
