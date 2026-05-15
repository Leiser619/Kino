package com.example.demo.controller;


import com.example.demo.dto.movie.Ticketreq;
import com.example.demo.security.UserPrincipal;
import com.example.demo.service.TicketService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/ticket")
@RequiredArgsConstructor
public class TicketController {
    private final TicketService ticketService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void addTicket(@Valid @RequestBody List<Ticketreq> req, @AuthenticationPrincipal UserPrincipal principal) {
        ticketService.createTickets(req,principal.getId());
    }


}
