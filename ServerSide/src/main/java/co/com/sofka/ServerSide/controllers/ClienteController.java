package co.com.sofka.ServerSide.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;
import co.com.sofka.ServerSide.service.ClienteService;
import co.com.sofka.ServerSide.model.ClienteModel;
import reactor.core.publisher.Flux;
import org.springframework.web.bind.annotation.*;

import org.springframework.http.HttpStatus;
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/cliente")
public class ClienteController {
    @Autowired
    private ClienteService clienteService;

    @PostMapping("")
    @ResponseStatus(HttpStatus.CREATED)
    public Mono<ClienteModel> save(@RequestBody ClienteModel cliente) {
        return this.clienteService.save(cliente);
    }

    @GetMapping(value = "")
    public Flux<ClienteModel> findAll() {
        return this.clienteService.findAll();
    }
}
