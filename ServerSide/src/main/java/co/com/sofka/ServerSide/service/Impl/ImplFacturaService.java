package co.com.sofka.ServerSide.service.Impl;

import org.springframework.beans.factory.annotation.Autowired;

import co.com.sofka.ServerSide.model.FacturaModel;
import co.com.sofka.ServerSide.repository.FacturaRepository;
import co.com.sofka.ServerSide.service.FacturaService;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import org.springframework.stereotype.Service;
@Service
public class ImplFacturaService implements FacturaService{
  
    @Autowired
    private FacturaRepository factura_repo;

    @Override
    public Mono<FacturaModel> save(FacturaModel vendedor) {
        return this.factura_repo.save(vendedor);
    }

    @Override
    public Flux<FacturaModel> findAll() {
        return this.factura_repo.findAll();
    }

}
