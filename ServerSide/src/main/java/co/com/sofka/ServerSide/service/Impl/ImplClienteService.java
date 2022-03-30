package co.com.sofka.ServerSide.service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import co.com.sofka.ServerSide.model.ClienteModel;
import co.com.sofka.ServerSide.repository.ClienteRepository;
import co.com.sofka.ServerSide.service.ClienteService;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import org.springframework.stereotype.Service;
@Service
public class ImplClienteService implements ClienteService{
    @Autowired
    private ClienteRepository cliente_repo;

    @Override
    public Mono<ClienteModel> save(ClienteModel vendedor) {
        return this.cliente_repo.save(vendedor);
    }

    @Override
    public Flux<ClienteModel> findAll() {
        return this.cliente_repo.findAll();
    }

  
    
}
