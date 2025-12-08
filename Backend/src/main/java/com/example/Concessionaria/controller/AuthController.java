package com.example.Concessionaria.controller;

import com.example.Concessionaria.dto.AuthDTO;
import com.example.Concessionaria.user.User;
import com.example.Concessionaria.security.TokenService;
import com.example.Concessionaria.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserRepository repository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody AuthDTO data) {
        if (repository.findByUsername(data.username()).isPresent()) {
            return ResponseEntity.badRequest().body(Map.of("error", "Usuário já existe"));
        }

        User user = new User();
        user.setUsername(data.username());
        user.setSenha(passwordEncoder.encode(data.senha()));
        user.setRole("USER");
        repository.save(user);

        return ResponseEntity.ok(Map.of("message", "Usuário registrado com sucesso"));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthDTO data) {
        User user = repository.findByUsername(data.username()).orElse(null);

        if (user == null || user.getSenha() == null || !passwordEncoder.matches(data.senha(), user.getSenha())) {
            return ResponseEntity.status(401).body("Usuário ou senha inválidos");
        }

        String token = TokenService.generateToken(user.getUsername(), user.getRole());
        if (token == null || user.getUsername() == null) {
            return ResponseEntity.status(500).body("Erro ao gerar token");
        }

        Map<String, Object> response = new HashMap<>();
        response.put("token", token);
        response.put("username", user.getUsername());

        return ResponseEntity.ok(response);
    }

}
