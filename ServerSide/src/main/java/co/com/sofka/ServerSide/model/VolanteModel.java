package co.com.sofka.ServerSide.model;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;

import java.util.List;
import java.util.UUID;
@Document(collection = "volantes")
public class VoltanteModel {
    @Id
    private String id = UUID.randomUUID().toString().substring(0, 10);
    private String fecha;
    private List<ProductoModel> productosAIngresar;
    private String CIProveedor;


    public VoltanteModel( String fecha, List<ProductoModel> productosAIngresar, String CIProveedor) {
        this.fecha = fecha;
        this.productosAIngresar = productosAIngresar;
        this.CIProveedor = CIProveedor;
    }


    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFecha() {
        return this.fecha;
    }

    public void setFecha(String fecha) {
        this.fecha = fecha;
    }

    public List<ProductoModel> getProductosAIngresar() {
        return this.productosAIngresar;
    }

    public void setProductosAIngresar(List<ProductoModel> productosAIngresar) {
        this.productosAIngresar = productosAIngresar;
    }

    public String getCIProveedor() {
        return this.CIProveedor;
    }

    public void setCIProveedor(String CIProveedor) {
        this.CIProveedor = CIProveedor;
    }

}
