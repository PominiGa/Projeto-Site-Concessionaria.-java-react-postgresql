package com.example.Concessionaria.car;

public record CarRequestDTO(String chassis, String marca, String modelo, Integer ano, String cor, double preco, Integer km, String urlImage) {
}
