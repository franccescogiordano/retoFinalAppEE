package co.com.sofka.ServerSide.repository;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

import co.com.sofka.ServerSide.model.FacturaModel;

public interface FacturaRepository  extends ReactiveMongoRepository<FacturaModel,String>{
    
}
