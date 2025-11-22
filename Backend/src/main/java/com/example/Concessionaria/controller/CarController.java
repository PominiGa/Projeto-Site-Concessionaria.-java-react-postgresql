package com.example.Concessionaria.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@RestController
@RequestMapping("/cars")
public class CarController {
    private final CarService service;
    public CarController(CarService service) {
        this.service = service;
    }

    @GetMapping
    public List<Car> list() {
        return service.listAll();
    }

    @GetMapping("/{id}")
    public Car getCarById(@RequestParam Long id) {
        return service.getCarById(id);
    }
    
}
