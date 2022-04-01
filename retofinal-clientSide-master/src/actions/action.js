import { service } from '../services/service';
const { getVendedores, getProductos, getFacturas, getProveedores, getVideos, getVolantes ,getClientes} = service();

const actGetProductos = ()=>async(dispatch)=>{
    try {
        console.log("TOY EN EL ACTION")
        
        fetch('http://localhost:8080/factura')
            .then(response => response.json())
            .then(data => dispatch({
                type: "getProductos", //a esto llama
                payload:data //esto carga
            }));
           
        /*    let url = `http://localhost:8080/factura`;
            const response = await fetch(url);
            const data = await response.json();
        dispatch({
            type: "getProductos", //a esto llama
            payload:data //esto carga
        });*/
    } catch (e) {
        console.log(e)
    }
}

export const action = ()=>{
    return{
        actGetProductos,
    }
}