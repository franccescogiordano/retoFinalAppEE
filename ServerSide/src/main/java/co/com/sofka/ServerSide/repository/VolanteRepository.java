package co.com.sofka.ServerSide.repository;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

import co.com.sofka.ServerSide.model.VoltanteModel;

public interface VoltanteRepository  extends ReactiveMongoRepository<VoltanteModel,String> {
    
}
