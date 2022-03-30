package co.com.sofka.ServerSide.repository;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

import co.com.sofka.ServerSide.model.ProductoModel;

public interface ProductoRepository  extends ReactiveMongoRepository<ProductoModel,String>{
    
}
