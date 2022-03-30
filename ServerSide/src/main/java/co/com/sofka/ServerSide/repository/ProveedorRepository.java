package co.com.sofka.ServerSide.repository;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

import co.com.sofka.ServerSide.model.ProveedorModel;
public interface ProveedorRepository  extends ReactiveMongoRepository<ProveedorModel,String>{
    
}
