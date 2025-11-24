package com.example.Concessionaria.car;

public record CarResponseDTO(Long id, String chassis, String marca, String modelo, Integer ano, String cor, double preco, Integer km, String urlImage, boolean vendido) {
    public CarResponseDTO(Car car) {
        this(car.getId(), car.getChassis(), car.getMarca(), car.getModelo(), car.getAno(), car.getCor(), car.getPreco(), car.getKm(), car.getUrlImagem(), car.isVendido());
    }
}
