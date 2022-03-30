package co.com.sofka.ServerSide.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;
import co.com.sofka.ServerSide.service.VolanteService;
import co.com.sofka.ServerSide.model.VolanteModel;
import reactor.core.publisher.Flux;
import org.springframework.web.bind.annotation.*;

import org.springframework.http.HttpStatus;
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/volante")
public class VolanteController {
    @Autowired
    private VolanteService volanteService;

    @PostMapping("")
    @ResponseStatus(HttpStatus.CREATED)
    public Mono<VolanteModel> save(@RequestBody VolanteModel volante) {
        return this.volanteService.save(volante);
    }

    @GetMapping(value = "")
    public Flux<VolanteModel> findAll() {
        return this.volanteService.findAll();
    }
}
