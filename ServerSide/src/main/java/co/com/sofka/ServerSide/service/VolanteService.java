package co.com.sofka.ServerSide.service;
import co.com.sofka.ServerSide.model.VolanteModel;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
public interface VolanteService {
    Mono<VolanteModel> save(VolanteModel vendedor);
    Flux<VolanteModel> findAll();
}
