package com.example.Concessionaria.dto;

import java.math.BigDecimal;

public record CarRequestDTO(String chassis, String marca, String modelo, Integer ano, String cor, BigDecimal preco, Integer km, String urlImagem) {
}
