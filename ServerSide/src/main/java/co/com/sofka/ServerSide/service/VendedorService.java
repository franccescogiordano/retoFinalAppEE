package co.com.sofka.ServerSide.service;

import co.com.sofka.ServerSide.model.VendedorModel;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
public interface VendedorService {
    Mono<VendedorModel> save(VendedorModel vendedor);
    Flux<VendedorModel> findAll();
}
