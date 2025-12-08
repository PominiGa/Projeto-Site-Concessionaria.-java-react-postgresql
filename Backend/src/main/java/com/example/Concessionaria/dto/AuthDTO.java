package com.example.Concessionaria.dto;

public record AuthDTO (String UserName, String senha) {
    public String email() {
        return null;
    }
}
