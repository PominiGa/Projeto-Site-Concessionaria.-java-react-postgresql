package com.example.Concessionaria.user;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class TokenService {
    private final String secret = "1234"; //temporario, eu acho

    public String GenerateToken(String UserName) {
        return Jwts.builder().setSubject(UserName).setExpiration(new Date(System.currentTimeMillis() + 86400000)).signWith(SignatureAlgorithm.HS256, secret).compact();
    }

    public String validateToken(String token) {
        return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody().getSubject();
    }
}
