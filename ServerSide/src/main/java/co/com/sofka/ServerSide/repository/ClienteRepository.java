package co.com.sofka.ServerSide.repository;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

import co.com.sofka.ServerSide.model.ClienteModel;

public interface ClienteRepository extends ReactiveMongoRepository<ClienteModel,String> {
    
}
