package co.com.sofka.ServerSide.service.Impl;
import co.com.sofka.ServerSide.model.FacturaModel;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
public interface FacturaService {
    Mono<FacturaModel> save(FacturaModel factura);
    Flux<FacturaModel> findAll();
}
