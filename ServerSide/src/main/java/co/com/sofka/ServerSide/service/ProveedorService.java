package co.com.sofka.ServerSide.service;


import co.com.sofka.ServerSide.model.ProveedorModel;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
public interface ProveedorService {
    Mono<ProveedorModel> save(ProveedorModel proveedor);
    Flux<ProveedorModel> findAll();
}
