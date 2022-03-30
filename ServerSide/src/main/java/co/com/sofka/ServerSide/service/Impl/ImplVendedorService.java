package co.com.sofka.ServerSide.service.Impl;

import org.springframework.beans.factory.annotation.Autowired;

import co.com.sofka.ServerSide.model.VendedorModel;
import co.com.sofka.ServerSide.repository.VendedorRepository;
import co.com.sofka.ServerSide.service.VendedorService;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import org.springframework.stereotype.Service;
@Service
public class ImplVendedorService implements VendedorService{

    @Autowired
    private VendedorRepository vendedor_repo;
    @Override
    public Mono<VendedorModel> save(VendedorModel productoModel) {
        return this.vendedor_repo.save(productoModel);
    }

    @Override
    public Flux<VendedorModel> findAll() {
        return  this.vendedor_repo.findAll();
    }
    
}
