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
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private UserRepository repository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private TokenService tokenService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody AuthDTO data) {

        if (repository.findByUsername(data.username()).isPresent()) {
            return ResponseEntity
                    .badRequest()
                    .body(Map.of("error", "Usuário já existe"));
        }

        User newUser = new User();
        newUser.setUsername(data.username());
        newUser.setSenha(passwordEncoder.encode(data.senha()));
        newUser.setRole("USER");

        repository.save(newUser);

        return ResponseEntity.ok(Map.of("message", "Usuário registrado com sucesso"));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthDTO data) {

        User user = repository.findByUsername(data.username()).orElse(null);

        if (user == null || !passwordEncoder.matches(data.senha(), user.getSenha())) {
            return ResponseEntity.status(401).body(Map.of("error", "Usuário ou senha inválidos"));
        }

        String token = tokenService.generateToken(user.getUsername(), user.getRole());
        Map<String, Object> response = new HashMap<>();
        response.put("token", token);
        response.put("username", user.getUsername());
        response.put("role", user.getRole());

        return ResponseEntity.ok(response);
    }
}
