package co.com.sofka.ServerSide.service;

import co.com.sofka.ServerSide.model.ClienteModel;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
public interface ClienteService {
    Mono<ClienteModel> save(ClienteModel cliente);
    Flux<ClienteModel> findAll();
}
