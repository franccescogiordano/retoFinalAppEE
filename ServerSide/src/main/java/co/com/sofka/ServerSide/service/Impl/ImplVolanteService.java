package co.com.sofka.ServerSide.service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.com.sofka.ServerSide.model.VolanteModel;
import co.com.sofka.ServerSide.repository.VolanteRepository;
import co.com.sofka.ServerSide.service.VolanteService;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
@Service
public class ImplVolanteService implements VolanteService{
    @Autowired
    private VolanteRepository volante_repo;

    @Override
    public Mono<VolanteModel> save(VolanteModel volante) {
        return this.volante_repo.save(volante);
    }

    @Override
    public Flux<VolanteModel> findAll() {
        return this.volante_repo.findAll();
    }
    
}
