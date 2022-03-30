package co.com.sofka.ServerSide.service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.com.sofka.ServerSide.model.ProductoModel;
import co.com.sofka.ServerSide.repository.ProductoRepository;
import co.com.sofka.ServerSide.service.ProductoService;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
@Service
public class ImplProductoService implements ProductoService{
    

    @Autowired
    private ProductoRepository prod_repo;

    @Override
    public Mono<ProductoModel> save(ProductoModel productoModel) {
      
        return this.prod_repo.save(productoModel);


    }

    @Override
    public Flux<ProductoModel> findAll() {
        return  this.prod_repo.findAll();
    }

    @Override
    public Mono<ProductoModel> disminuirStock(String id, String restar) {
        return this.prod_repo.findById(id)
        .flatMap(producto -> {
            producto.disminuirStock(restar);
            return save(producto);
        })
        .switchIfEmpty(Mono.empty());
    }

    @Override
    public Mono<ProductoModel> aumentarStock(String id, String sumar) {
        return this.prod_repo.findById(id)
        .flatMap(producto -> {
            producto.aumentarStock(sumar);
            return save(producto);
        })
        .switchIfEmpty(Mono.empty());
    }

    @Override
    public Mono<ProductoModel> findById(String id) {
        return this.prod_repo.findById(id);
    }
    
}
