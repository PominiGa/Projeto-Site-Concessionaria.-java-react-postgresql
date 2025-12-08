package com.example.Concessionaria.controller;

import com.example.Concessionaria.car.Car;
import com.example.Concessionaria.car.CarRepository;
import com.example.Concessionaria.dto.CarRequestDTO;
import com.example.Concessionaria.dto.CarResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cars")
public class CarController {

    @Autowired
    private CarRepository repository;

    @GetMapping
    public ResponseEntity<List<CarResponseDTO>> getAll() {
        List<CarResponseDTO> cars = repository.findAll()
                .stream()
                .map(CarResponseDTO::new)
                .toList();
        return ResponseEntity.ok(cars);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CarResponseDTO> getById(@PathVariable Long id) {
        return repository.findById(id)
                .map(car -> ResponseEntity.ok(new CarResponseDTO(car)))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<CarResponseDTO> saveCar(@RequestBody CarRequestDTO data) {
        Car car = new Car(data);
        repository.save(car);
        return ResponseEntity.ok(new CarResponseDTO(car));
    }

    @PutMapping("/{id}")
    public ResponseEntity<CarResponseDTO> updateCar(@PathVariable Long id, @RequestBody CarRequestDTO data) {
        return repository.findById(id).map(car -> {
            car.setChassis(data.chassis());
            car.setMarca(data.marca());
            car.setModelo(data.modelo());
            car.setAno(data.ano());
            car.setCor(data.cor());
            car.setPreco(data.preco());
            car.setKm(data.km());
            car.setUrlImagem(data.urlImagem());
            repository.save(car);
            return ResponseEntity.ok(new CarResponseDTO(car));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCar(@PathVariable Long id) {
        if (!repository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        repository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
