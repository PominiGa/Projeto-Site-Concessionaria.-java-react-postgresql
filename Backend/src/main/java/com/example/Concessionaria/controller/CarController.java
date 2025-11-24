package com.example.Concessionaria.controller;

import com.example.Concessionaria.car.Car;
import com.example.Concessionaria.car.CarRepository;
import com.example.Concessionaria.car.CarRequestDTO;
import com.example.Concessionaria.car.CarResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("cars")
public class CarController {

    @Autowired
    private CarRepository repository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public void saveCar(@RequestBody CarRequestDTO data) {
        Car carData = new Car(data);
        repository.save(carData);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<CarResponseDTO> getAll() {
        List<CarResponseDTO> carList = repository.findAll().stream().map(CarResponseDTO::new).toList();
        return carList;
    }
}