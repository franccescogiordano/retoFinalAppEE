import { service } from '../services/service';
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "firebase/auth";
const { getVendedores, getProductos, getFacturas, getProveedores, getVideos, getVolantes ,getClientes} = service();

const actGetProductos = ()=>async(dispatch)=>{
    try {   
        fetch('http://localhost:8080/inventario')
            .then(response => response.json())
            .then(data => dispatch({
                type: "getProductos", //a esto llama
                payload:data //esto carga
            }));
    } catch (e) {
        console.log(e)
    }
}


const actGetFacturas = ()=>async(dispatch)=>{
    try {
        fetch('http://localhost:8080/factura')
            .then(response => response.json())
            .then(data => dispatch({
                type: "getFacturas", //a esto llama
                payload:data //esto carga
            }));
    } catch (e) {
        console.log(e)
    }
}
const actGetVolantes = ()=>async(dispatch)=>{
    try {
        fetch('http://localhost:8080/volante')
            .then(response => response.json())
            .then(data => dispatch({
                type: "getVolantes", //a esto llama
                payload:data //esto carga
            }));
    } catch (e) {
        console.log(e)
    }
}
const actlogear = (auth,email,password)=>async(dispatch)=>{
    
    try{
    const user= await signInWithEmailAndPassword(auth, email, password);
      
    dispatch({
            type: "logear", //a esto llama
            payload:user //esto carga
        });
    }catch(e){
            const errorMessage = e.message;
            dispatch({
                type: "estadoLogin", //a esto llama
                payload:errorMessage //esto carga
            });
    }
}
const actregister = (auth,email,password)=>async(dispatch)=>{
    
    try{
    const user= await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    dispatch({
            type: "registrar", //a esto llama
            payload:"registrado con exito! ahora inicia sesion" //esto carga
        });
    }catch(e){
            const errorMessage = e.message;
            dispatch({
                type: "estadoLogin", //a esto llama
                payload:errorMessage //esto carga
            });
    }
}
const actreset = ()=>async(dispatch)=>{
    dispatch({
        type: "reset", //a esto llama
    });
}

const actdeslogear = ()=>async(dispatch)=>{
    dispatch({
        type: "deslogear", //a esto llama
    });
}
const actreload = (x)=>async(dispatch)=>{
    dispatch({
        type: "reload", //a esto llama
        payload:x
    });
}

const actaddcarrito = (idproducto,cantidad)=>async(dispatch)=>{
    dispatch({
        type: "addcarrito", //a esto llama
        payload:{
            idproducto:idproducto,
            cantidad:cantidad
        }
    });


}
const actdelcarrito = (idproducto)=>async(dispatch)=>{
    dispatch({
        type: "delcarrito", //a esto llama
        payload:{
            idproducto:idproducto
        }
    });
}
const actaddcarrito2 = (idproducto,cantidad)=>async(dispatch)=>{
    dispatch({
        type: "addcarrito2", //a esto llama
        payload:{
            idproducto:idproducto,
            cantidad:cantidad
        }
    });


}
const actdelcarrito2 = (idproducto)=>async(dispatch)=>{
    dispatch({
        type: "delcarrito2", //a esto llama
        payload:{
            idproducto:idproducto
        }
    });
}
const actcargarproducto = (nombreX,descripcionX,stockActualX,stockMinimoX,stockMaximoX,precioX,tipoX)=>async(dispatch)=>{
    try {
        const request = {
            nombre: nombreX,
            precio: precioX,
            descripcion: descripcionX,
            stockActual: stockActualX,
            tipo: tipoX,
            stockMinimo: stockMinimoX,
            stockMaximo: stockMaximoX
        }
        console.log(request)
        console.log(JSON.stringify(request))
        fetch("http://localhost:8080/inventario", {
            method: "POST",
            body: JSON.stringify(request),
            headers: { "Content-Type": "application/json" }
        })
            .then(response => response.json())
            .then(data => dispatch({
                type: "cargarproducto",
                payload: data
            }));
    } catch(error) {
        console.log(error.message);
    }
}

const actfactura = (fechafactura,quienatendio,productoscomprados,totalapagar)=>async(dispatch)=>{
    try {
        const request = {
        fechaFactura:fechafactura,
        quienAtendio:quienatendio,
        productosComprados:productoscomprados,
        totalAPagar:totalapagar
        }
        console.log(request)
        console.log(JSON.stringify(request))
        fetch("http://localhost:8080/factura", {
            method: "POST",
            body: JSON.stringify(request),
            headers: { "Content-Type": "application/json" }
        })
            .then(response => response.json())
            .then(data => dispatch({
                type: "cargarfactura",
                payload: data
            }));
    } catch(error) {
        console.log(error.message);
    }
}
export const action = ()=>{
    return{
        actGetProductos,
        actlogear,
        actdeslogear,
        actregister,
        actreset,
        actreload,
        actaddcarrito,
        actdelcarrito,
        actcargarproducto,
        actGetFacturas,
        actfactura
    }
}