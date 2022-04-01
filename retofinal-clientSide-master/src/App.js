
import Logo from './assets/img/logo.png'
import { Link } from "react-router-dom";
import React, { Component }  from 'react';
function App() {
  return (
    <div className="div-welcome">
      <img src={Logo} alt="" />
      <h1>Reto final - Client Side</h1>
      <Link to='/auth'>Inicar Sesion / Registrarte</Link>
    </div>
  );
}

export default App;
