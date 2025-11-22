package com.example.Concessionaria.model;

import jakarta.persistence.Id;
import java.util.UUID;

import jakarta.persistence.Entity;

@Entity
public class Car {
    @Id
    private String id = UUID.randomUUID().toString();

    private String marca;
    private String modelo;
    private int ano;
    private String cor;
    private double preco;
    private int km;
    private String urlImagem;
    private boolean vendido = false;
    
    public Car() {

    }

    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getMarca() {
        return marca;
    }
    public void setMarca(String marca) {
        this.marca = marca;
    }
    public String getModelo() {
        return modelo;
    }
    public void setModelo(String modelo) {
        this.modelo = modelo;
    }
    public int getAno() {
        return ano;
    }
    public void setAno(int ano) {
        this.ano = ano;
    }
    public String getCor() {
        return cor;
    }
    public void setCor(String cor) {
        this.cor = cor;
    }
    public double getPreco() {
        return preco;
    }
    public void setPreco(double preco) {
        this.preco = preco;
    }
    public int getKm() {
        return km;
    }
    public void setKm(int km) {
        this.km = km;
    }
    public String getUrlImagem() {
        return urlImagem;
    }
    public void setUrlImagem(String urlImagem) {
        this.urlImagem = urlImagem;
    }
    public boolean isVendido() {
        return vendido;
    }
    public void setVendido(boolean vendido) {
        this.vendido = vendido;
    }
}