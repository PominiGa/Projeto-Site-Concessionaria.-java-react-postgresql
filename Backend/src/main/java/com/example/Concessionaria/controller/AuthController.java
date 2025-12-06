package com.example.Concessionaria.controller;

import com.example.Concessionaria.Usuario.AuthDTO;
import com.example.Concessionaria.Usuario.TokenService;
import com.example.Concessionaria.Usuario.User;
import com.example.Concessionaria.Usuario.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserRepository repository;

    @Autowired
    private TokenService tokenService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthDTO data) {

        User user = repository.findByUsername(data.UserName())
                .orElse(null);

        if (user == null) {
            return ResponseEntity.status(401).body("Usuário não encontrado");
        }

        if (!passwordEncoder.matches(data.senha(), user.getSenha())) {
            return ResponseEntity.status(401).body("Senha incorreta");
        }

        String token = tokenService.generateToken(user.getUserName());

        return ResponseEntity.ok(token);
    }
}
