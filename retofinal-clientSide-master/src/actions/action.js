import { service } from '../services/service';
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "firebase/auth";
const { getVendedores, getProductos, getFacturas, getProveedores, getVideos, getVolantes ,getClientes} = service();

const actGetProductos = ()=>async(dispatch)=>{
    try {
        console.log("TOY EN EL ACTION")
        
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
export const action = ()=>{
    return{
        actGetProductos,
        actlogear,
        actdeslogear,
        actregister,
        actreset,
        actreload,
        actaddcarrito,
        actdelcarrito
    }
}