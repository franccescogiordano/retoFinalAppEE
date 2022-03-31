import React,{useState} from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


import {useFirebaseApp} from 'reactfire';


export default  (props) => {
    const [ email,setEmail]= useState("");
    const [ password,setPassword]= useState("");
    const [estado,setEstado]=useState("");
    const firebase=useFirebaseApp();
    const submit = async () =>{
        const auth = getAuth();
        console.log(auth.currentUser);
      await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setEstado("true");
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setEstado("false");
      });
      // createUserWithEmailAndPassword(auth,email,password);
        }
    return (<div>
       <h1>{estado}</h1>
        <div>
            <label htmlFor="email">Correo electronico</label>
            <input type="email" id="email" onChange={(ev)=>setEmail(ev.target.value)} ></input>
            <label htmlFor="password"> Contraseña</label>
            <input type="password" id="password" onChange={(ev)=>setPassword(ev.target.value)} ></input>
            <button onClick={submit}>Iniciar sesion</button>
        </div>
    </div>  );
}
 
