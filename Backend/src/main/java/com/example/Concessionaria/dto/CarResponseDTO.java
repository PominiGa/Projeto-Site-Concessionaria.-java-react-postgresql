package com.example.Concessionaria.dto;

import com.example.Concessionaria.car.Car;

import java.math.BigDecimal;

public record CarResponseDTO(Long id, String chassis, String marca, String modelo, Integer ano, String cor, BigDecimal preco, Integer km, String urlImagem, boolean vendido) {
    public CarResponseDTO(Car car) {
        this(car.getId(), car.getChassis(), car.getMarca(), car.getModelo(), car.getAno(), car.getCor(), car.getPreco(), car.getKm(), car.getUrlImagem(), car.isVendido());
    }
}
