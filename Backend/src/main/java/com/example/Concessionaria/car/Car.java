package com.example.Concessionaria.car;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Table(name = "cars")
@Entity(name = "cars")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Car {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String chassis;
    private String marca;
    private String modelo;
    private int ano;
    private String cor;
    private BigDecimal preco;
    private int km;
    private String urlImagem;
    private boolean vendido = false;

    public Car(CarRequestDTO data) {
        this.chassis = data.chassis();
        this.marca = data.marca();
        this.modelo = data.modelo();
        this.ano = data.ano();
        this.cor = data.cor();
        this.preco = data.preco();
        this.km = data.km();
        this.urlImagem = data.urlImagem();
    }
}