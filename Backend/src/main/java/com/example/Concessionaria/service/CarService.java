package com.example.Concessionaria.service;

import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class CarService {
    private final CarRepository repository;
    public CarService(CarRepository repository) {
        this.repository = repository;
    }
    public List<Car> listAll() {
        return repository.findAll();
    }
    public Car save(Car car) {
        return repository.save(car);
    }
    public Car find(String id) {
        return repository.findById(id).orElse(null);
    }
    public void delete(String id) {
        repository.deleteById(id);
    }
}
