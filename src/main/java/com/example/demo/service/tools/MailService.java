package com.example.demo.service.tools;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.autoconfigure.mail.MailProperties;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MailService {

    private final JavaMailSender mailSender;

    private final MailProperties mailProperties;

    public void sendHtmlMail(
            String to,
            String html,
            String subject
    ) throws MessagingException {

        MimeMessage mimeMessage =
                mailSender.createMimeMessage();

        MimeMessageHelper helper =
                new MimeMessageHelper(
                        mimeMessage,
                        true,
                        "UTF-8"
                );

        helper.setTo(to);

        helper.setSubject(subject);

        helper.setFrom(
                mailProperties.getUsername()
        );

        helper.setText(html, true);

        mailSender.send(mimeMessage);
    }
}