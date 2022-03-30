package co.com.sofka.ServerSide.repository;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

import co.com.sofka.ServerSide.model.VendedorModel;
public interface VendedorRepository  extends ReactiveMongoRepository<VendedorModel,String> {
    
}
