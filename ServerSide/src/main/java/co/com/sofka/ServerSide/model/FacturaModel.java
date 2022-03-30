package co.com.sofka.ServerSide.model;

import java.util.List;
import java.util.UUID;

import org.springframework.data.annotation.Id;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "facturas")
public class FacturaModel {
    @Id
    private String id = UUID.randomUUID().toString().substring(0, 10);
    private String fechaFactura;
    public static final String CONSECUTIVODEFACTURAS = "";

    private VendedorModel quienAtendio;
    private List<ProductoModel> productosComprados;
    private Float totalAPagar;

    public FacturaModel(String fechaFactura, VendedorModel quienAtendio, List<ProductoModel> productosComprados,
            Float totalAPagar) {
        this.fechaFactura = fechaFactura;
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
