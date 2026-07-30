package com.chethan.jwt.controller;

import java.nio.charset.StandardCharsets;
import java.util.Base64;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.chethan.jwt.model.AuthenticationResponse;
import com.chethan.jwt.util.JwtUtil;

@RestController
public class AuthenticationController {

    private final JwtUtil jwtUtil;

    public AuthenticationController(JwtUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }

    @GetMapping("/authenticate")
    public AuthenticationResponse authenticate(
            @RequestHeader("Authorization") String authorizationHeader) {
        String encodedCredentials = authorizationHeader.substring(6);
        byte[] decodedBytes = Base64.getDecoder().decode(encodedCredentials);
        String decodedCredentials = new String(decodedBytes, StandardCharsets.UTF_8);
        String[] values = decodedCredentials.split(":", 2);
        String username = values[0];
        String token = jwtUtil.generateToken(username);
        return new AuthenticationResponse(token);
    }
}