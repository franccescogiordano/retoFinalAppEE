
import Logo from './assets/img/logo.png'
import Auth from './components/Auth';
import React, { Component }  from 'react';
function App() {
  return (
    <div className="div-welcome">
      <img src={Logo} alt="" />
      <h1>Reto final - Client Side</h1>
      <Auth></Auth>
    </div>
  );
}

export default App;
