package co.com.sofka.ServerSide.model;
import java.util.List;
import java.util.UUID;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection = "facturas")
public class FacturaModel {
    @Id
    private String id = UUID.randomUUID().toString().substring(0, 10);
    private String fechaFactura;

    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long Consecutivodefacturas ;
    private VendedorModel quienAtendio;
    private List<ProductoModel> productosComprados;
    private Float totalAPagar;


    public FacturaModel(String fechaFactura, Long Consecutivodefacturas, VendedorModel quienAtendio, List<ProductoModel> productosComprados, Float totalAPagar) {
        this.fechaFactura = fechaFactura;
        this.Consecutivodefacturas = Consecutivodefacturas;
        this.quienAtendio = quienAtendio;
        this.productosComprados = productosComprados;
        this.totalAPagar = totalAPagar;
    }


    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFechaFactura() {
        return this.fechaFactura;
    }

    public void setFechaFactura(String fechaFactura) {
        this.fechaFactura = fechaFactura;
    }

    public Long getConsecutivodefacturas() {
        return this.Consecutivodefacturas;
    }

    public void setConsecutivodefacturas(Long Consecutivodefacturas) {
        this.Consecutivodefacturas = Consecutivodefacturas;
    }

    public VendedorModel getQuienAtendio() {
        return this.quienAtendio;
    }

    public void setQuienAtendio(VendedorModel quienAtendio) {
        this.quienAtendio = quienAtendio;
    }

    public List<ProductoModel> getProductosComprados() {
        return this.productosComprados;
    }

    public void setProductosComprados(List<ProductoModel> productosComprados) {
        this.productosComprados = productosComprados;
    }

    public Float getTotalAPagar() {
        return this.totalAPagar;
    }

    public void setTotalAPagar(Float totalAPagar) {
        this.totalAPagar = totalAPagar;
    }



}
