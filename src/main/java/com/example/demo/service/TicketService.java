package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.model.cinema.Screening;
import com.example.demo.model.cinema.Ticket;
import com.example.demo.repository.ScreeningRepository;
import com.example.demo.repository.TicketRepository;
import com.example.demo.repository.UserRepository;
import jakarta.persistence.EntityExistsException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import com.example.demo.dto.movie.Ticketreq;
import java.util.ArrayList;
import java.util.List;


@Service
@Slf4j
@RequiredArgsConstructor
public class TicketService {
    private final TicketRepository ticketRepository;
    private final ScreeningRepository screeningRepository;
    private final UserRepository userRepository;
//    private final EmailService emailService;
    @Transactional
    public void createTickets(List<Ticketreq> ticketRequests,Long userId) {
        User user = userRepository.getReferenceById(userId);
        List<Ticket> tickets=new ArrayList<>();
        for (Ticketreq ticketreq : ticketRequests) {

            Ticket ticket = new Ticket();

            Screening screening = screeningRepository
                    .getReferenceById(ticketreq.screeningId());

            boolean exists = ticketRepository
                    .existsByRowAndColAndScreening(
                            ticketreq.row(),
                            ticketreq.col(),
                            screening
                    );

            if (exists) {
                log.error("Miejsce jest zarezerwowane BE");
                throw new EntityExistsException(
                        "Miejsce na ten seans jest już zarezerwowane  BE"
                );
            }

            ticket.setRow(ticketreq.row());
            ticket.setCol(ticketreq.col());

            ticket.setPaid(false);
            ticket.setScreening(screening);
            ticket.setOwner(user);
            ticket.setOwnerEmail(user.getEmail());
            tickets.add(ticketRepository.save(ticket));

            //TODO RATELIMITY i Mailsender
        }

    }
}
