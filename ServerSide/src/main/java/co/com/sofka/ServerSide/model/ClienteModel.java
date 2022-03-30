package co.com.sofka.ServerSide.model;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;
import java.util.UUID;
@Document(collection = "clientes")
public class ClienteModel {
    @Id
    private String id = UUID.randomUUID().toString().substring(0, 10);
    private String nombre;
    private String apellido;
    private String documentoDeIdentidad;


    public ClienteModel( String nombre, String apellido, String documentoDeIdentidad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.documentoDeIdentidad = documentoDeIdentidad;
    }


    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return this.apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getDocumentoDeIdentidad() {
        return this.documentoDeIdentidad;
    }

    public void setDocumentoDeIdentidad(String documentoDeIdentidad) {
        this.documentoDeIdentidad = documentoDeIdentidad;
    }


}
