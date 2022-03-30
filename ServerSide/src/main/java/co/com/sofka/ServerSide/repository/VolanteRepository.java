package co.com.sofka.ServerSide.repository;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

import co.com.sofka.ServerSide.model.VolanteModel;

public interface VolanteRepository  extends ReactiveMongoRepository<VolanteModel,String> {
    
}
