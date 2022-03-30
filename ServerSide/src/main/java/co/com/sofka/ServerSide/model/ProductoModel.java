package co.com.sofka.ServerSide.model;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;
import java.util.UUID;
@Document(collection = "inventario")
public class ProductoModel {
    @Id
    private String id = UUID.randomUUID().toString().substring(0, 10);
    private String tipo;
    private String stockActual;
    private String stockMinimo;
    private String stockMaximo;
    private String descripcion;
    private String nombre;
    private Float precio;


    public ProductoModel(String tipo, String stockActual, String stockMinimo, String descripcion, String nombre,String stockMaximo, Float precio) {
        this.tipo = tipo;
        this.stockActual = stockActual;
        this.stockMinimo = stockMinimo;
        this.descripcion = descripcion;
        this.nombre = nombre;
        this.stockMaximo = stockMaximo;
        this.precio = precio;
    }

    public Float getPrecio() {
        return precio;
    }

    public void setPrecio(Float precio) {
        this.precio = precio;
    }

    public String getStockActual() {
        return stockActual;
    }

    public void setStockActual(String stockActual) {
        this.stockActual = stockActual;
    }

    public String getStockMaximo() {
        return stockMaximo;
    }

    public void setStockMaximo(String stockMaximo) {
        this.stockMaximo = stockMaximo;
    }

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTipo() {
        return this.tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }



    public String getStockMinimo() {
        return this.stockMinimo;
    }

    public void setStockMinimo(String stockMinimo) {
        this.stockMinimo = stockMinimo;
    }

    public String getDescripcion() {
        return this.descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void disminuirStock(String restar){
        int actual=Integer.parseInt(this.stockActual);
        int restarint=Integer.parseInt(restar);
        int stockfinal=actual-restarint;

        this.stockActual=String.valueOf(stockfinal);
    }

    public void aumentarStock(String sumar){
        int actual=Integer.parseInt(this.stockActual);
        int sumarint=Integer.parseInt(sumar);
        int stockfinal=actual+sumarint;

        this.stockActual=String.valueOf(stockfinal);
    }
}
