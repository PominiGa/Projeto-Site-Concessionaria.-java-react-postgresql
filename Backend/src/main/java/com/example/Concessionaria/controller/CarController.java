package com.example.Concessionaria.controller;

import com.example.Concessionaria.model.Car;
import com.example.Concessionaria.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@RestController
@RequestMapping("cars")
public class CarController {

    @Autowired
    private CarRepository repository;
    @GetMapping
    public List<Car> getAll() {

        List<Car> carList = repository.findAll();
        return carList;
    }
}