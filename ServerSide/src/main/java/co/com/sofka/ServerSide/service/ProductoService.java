package co.com.sofka.ServerSide.service;

import co.com.sofka.ServerSide.model.ProductoModel;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface ProductoService {
    Mono<ProductoModel> save(ProductoModel productoModel);
    Flux<ProductoModel> findAll();
    Mono<ProductoModel> disminuirStock(String id,String restar);
    Mono<ProductoModel> aumentarStock(String id,String sumar);
    Mono<ProductoModel> findById(String id);
}
