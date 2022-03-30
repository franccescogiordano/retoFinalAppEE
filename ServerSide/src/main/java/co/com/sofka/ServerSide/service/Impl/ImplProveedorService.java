package co.com.sofka.ServerSide.service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import co.com.sofka.ServerSide.model.ProveedorModel;
import co.com.sofka.ServerSide.repository.ProveedorRepository;
import co.com.sofka.ServerSide.service.ProveedorService;
import reactor.core.publisher.Flux;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;
@Service
public class ImplProveedorService implements ProveedorService{
    @Autowired
    private ProveedorRepository proveedor_repo;

    @Override
    public Mono<ProveedorModel> save(ProveedorModel proveedor) {
        return this.proveedor_repo.save(proveedor);
    }
    
    @Override
    public Flux<ProveedorModel> findAll() {
        return this.proveedor_repo.findAll();
    }
    
}
