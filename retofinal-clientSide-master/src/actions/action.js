import { service } from '../services/service';
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "firebase/auth";
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

const actdeslogear = ()=>async(dispatch)=>{
    dispatch({
        type: "deslogear", //a esto llama
    });
}
export const action = ()=>{
    return{
        actGetProductos,
        actlogear,
        actdeslogear
    }
}