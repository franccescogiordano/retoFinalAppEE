package co.com.sofka.ServerSide.controllers;

import co.com.sofka.ServerSide.service.ProveedorService;
import co.com.sofka.ServerSide.model.ProveedorModel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

import reactor.core.publisher.Flux;
import org.springframework.web.bind.annotation.*;

import org.springframework.http.HttpStatus;
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/proveedor")
public class ProveedorController {
    
    @Autowired
    private ProveedorService proveedorService;

    @PostMapping("")
    @ResponseStatus(HttpStatus.CREATED)
    public Mono<ProveedorModel> save(@RequestBody ProveedorModel proveedor) {
        return this.proveedorService.save(proveedor);
    }
    @GetMapping(value = "")
    public Flux<ProveedorModel> findAll() {
        return this.proveedorService.findAll();
    }
}
