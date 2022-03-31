import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import Login from '../containers/Login';

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [estado, setEstado] = useState("false");
  const [estadoLogin, setEstadoLogin] = useState("");
  const [estadoRegistrado, setEstadoRegistrado] = useState("unregister");
  const auth = getAuth();
  const submit = async () => {

    console.log(auth.currentUser);
    await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      setEstado("true");
      setEstadoRegistrado("unregister");
    })
      .catch((error) => {
        const errorMessage = error.message;
        setEstado("false");
        setEstadoLogin(errorMessage);

      });
    // createUserWithEmailAndPassword(auth,email,password);
  }
  const logout = async () => {
    signOut(auth).then(() => {
      setEstado("false");
    }).catch((error) => {
      console.error(error);
    });

  }

  const registrar = async () => {
    await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      setEstadoRegistrado("registrado con exito! ahora inicia sesion");


    })
      .catch((error) => {
        const errorMessage = error.message;
        setEstado("false");
        setEstadoLogin(errorMessage);

      });
  }
  return (<div>
    {estadoLogin !== "" && <h4>{estadoLogin}</h4>}
    {estadoRegistrado === "registrado con exito! ahora inicia sesion" && <h4>{estadoRegistrado}</h4>}
    {estado === "false" && <div className="container">
      <label htmlFor="email">Correo electronico</label>
      <input type="email" id="email" onChange={(ev) => setEmail(ev.target.value)} ></input>
      <label htmlFor="password"> Contraseña</label>
      <input type="password" id="password" onChange={(ev) => setPassword(ev.target.value)} ></input>
      <button onClick={submit}>Iniciar sesion</button>
      {estadoRegistrado === "unregister" && <button onClick={registrar}>Registrarme</button>}
    </div>}
    {estado === "true" && <><Login></Login><button onClick={logout}>Cerrar sesion</button></>}
  </div>);
}

