import React, { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { action } from "../actions/action";
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import Inventory from './Inventory';

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {estadoLogin,user,estadoRegistrado} = useSelector(state => state.reducerproductos);//aca traigo info
  //const [estadoRegistrado, setEstadoRegistrado] = useState("unregister");
  const auth = getAuth();

  const dispatch=useDispatch();
  
  const { actlogear,actdeslogear,actregister,actreset} = action();

  useEffect(() => {dispatch(actreset());}, []);
 
  
 
 // const [user, setUser] = useState([]);
  const submit = async () => {

      dispatch(actlogear(auth,email,password));
    // createUserWithEmailAndPassword(auth,email,password);
  }
  const logout = async () => {
    signOut(auth).then(() => {
      dispatch(actdeslogear());
    }).catch((error) => {
      console.error(error);
    });

  }

  const registrar = async () => {
   
    dispatch(actregister(auth,email,password));
    //setEstadoRegistrado("registrado con exito! ahora inicia sesion");
    }
  
  return (<div>
    {<h4>{estadoLogin}</h4>}
    {estadoRegistrado === "registrado con exito! ahora inicia sesion" && <h4>{estadoRegistrado}</h4>}
    {!user && <div className="container-login">
      <label htmlFor="email">Correo electronico</label>
      <input type="email" id="email" onChange={(ev) => setEmail(ev.target.value)} ></input>
      <label htmlFor="password"> Contraseña</label>
      <input type="password" id="password" onChange={(ev) => setPassword(ev.target.value)} ></input>
      <div className="botones-login">
      <button onClick={submit}>Iniciar sesion</button>
      {estadoRegistrado === "unregister" && <button onClick={registrar}>Registrarme</button>}</div>
    </div>}
    
    {user && <><Inventory user={user}></Inventory><button className="cerrarsesionboton" onClick={logout} >Cerrar sesion</button></>}
  </div>);
}

