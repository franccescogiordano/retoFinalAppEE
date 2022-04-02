package co.com.sofka.ServerSide.model;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;

import java.util.List;
import java.util.UUID;
@Document(collection = "volantes")
public class VolanteModel {
    @Id
    private String id = UUID.randomUUID().toString().substring(0, 10);
    private String fecha;
    private List<ProductoModel> productosAIngresar;
    private String CIProveedor;
    private String nombreprov;

    public VolanteModel( String fecha, List<ProductoModel> productosAIngresar, String CIProveedor,String nombreprov) {
        this.fecha = fecha;
        this.productosAIngresar = productosAIngresar;
        this.CIProveedor = CIProveedor;
        this.nombreprov=nombreprov;
    }


    public String getNombreprov() {
        return nombreprov;
    }


    public void setNombreprov(String nombreprov) {
        this.nombreprov = nombreprov;
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
