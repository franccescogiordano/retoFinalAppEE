package co.com.sofka.ServerSide.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import co.com.sofka.ServerSide.model.ProductoModel;
import co.com.sofka.ServerSide.service.ProductoService;
import reactor.core.publisher.Flux;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;
import org.springframework.http.HttpStatus;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/inventario")
public class ProductoController {

    @Autowired
    private ProductoService productoService;

    @PostMapping("")
    @ResponseStatus(HttpStatus.CREATED)
    public Mono<ProductoModel> save(@RequestBody ProductoModel productoModel) {
        return this.productoService.save(productoModel);
    }

    @GetMapping(value = "")
    public Flux<ProductoModel> findAll() {
        return this.productoService.findAll();
    }

    

    @PutMapping(value ="/{id}/disminuirStock/{cantidad}")
    public Mono<ProductoModel> disminuirStock(@PathVariable("id") String id,@PathVariable("cantidad") String cantidad) {
        return this.productoService.disminuirStock(id,cantidad);
    }

    
    @PutMapping(value ="/{id}/aumentarStock/{cantidad}")
    public Mono<ProductoModel> aumentarStock(@PathVariable("id") String id,@PathVariable("cantidad") String cantidad) {
        return this.productoService.aumentarStock(id,cantidad);
    }

    @GetMapping(value ="/producto/{id}")
    public Mono<ProductoModel> findbyId(@PathVariable("id") String id){
        return this.productoService.findById(id);
    }
}
