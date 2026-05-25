package com.example.demo.controller;

import com.example.demo.dto.auth.AddEmployeeRequest;
import com.example.demo.dto.auth.LoginRequest;
import com.example.demo.dto.auth.MeResponse;
import com.example.demo.dto.auth.RegisterRequest;
import com.example.demo.model.User;
import com.example.demo.security.UserPrincipal;
import com.example.demo.service.AuthService;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.*;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.time.Duration;
import java.util.List;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public void register(@Valid @RequestBody RegisterRequest req) {
        authService.register(req);
    }

    @PostMapping("/login")
    public void login(
            @Valid @RequestBody LoginRequest req,
            HttpServletResponse response
    ) {

        String token = authService.login(req);

        ResponseCookie cookie = ResponseCookie.from("jwt", token)
                .httpOnly(true)
                .secure(false)
                .path("/")
                .maxAge(Duration.ofDays(1))
                .sameSite("Lax")
                .build();

        response.addHeader(
                HttpHeaders.SET_COOKIE,
                cookie.toString()
        );
    }

    @GetMapping("/me")
    public ResponseEntity<?> me(
            @AuthenticationPrincipal UserPrincipal user
    ) {

        if (user == null) {
            return ResponseEntity.ok(null);
        }

        return ResponseEntity.ok(
                new MeResponse(
                        user.getId(),
                        user.getEmail(),
                        user.getRole().name()
                )
        );
    }

    @PostMapping("/logout")
    public ResponseEntity<Void> logout() {

        ResponseCookie cookie = ResponseCookie.from("jwt", "")
                .httpOnly(true)
                .secure(false)
                .path("/")
                .maxAge(0)
                .sameSite("Lax")
                .build();

        return ResponseEntity.ok()
                .header(
                        HttpHeaders.SET_COOKIE,
                        cookie.toString()
                )
                .build();
    }



    @GetMapping("/employees")
    public List<User> getEmployees() {
        return authService.getEmployees();
    }

    @PutMapping("/employees")
    public User addEmployee(
            @Valid @RequestBody AddEmployeeRequest request
    ) {

        return authService.addEmployee(
                request.email()
        );
    }

    @DeleteMapping("/employees/{id}")
    public User removeEmployee(
            @PathVariable("id") Long id
    ) {

        return authService.removeEmployee(id);
    }
}