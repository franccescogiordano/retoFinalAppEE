import React, { useState, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import CarritoList from "./CarritoList";
import { action } from "../actions/action";
import jsPDF from "jspdf";
const DoFactura = (props) => {
    const user = props.user;
    const carritow = props.carrtow;
    const [totalapagar, setTotalAPagar] = useState(0);
    const [fechaFactura, setFechaFactura] = useState("");
    const dispatch = useDispatch();
    const { actfactura} = action();
    let plata =0;
    console.log(props)
    const hacerventa = () => {
        console.log("wiiii")
    }
    
   const generatePDF = () => {
        var doc= new jsPDF("p","pt","a4");
        doc.html(document.querySelector("#imprimir"),{
            callback: function(pdf){
                pdf.save("mypdf.pdf");
            }
        })
    }

    const sumarprecios = (x) => {
        x.map((producto) => {
            plata += producto.precio * producto.cantidad;
           // console.log(plata)
            return producto;
        })
        setTotalAPagar(plata)
       //console.log(platita)
        dispatch(actfactura(fechaFactura,user,carritow,plata))
      
    }

    return (<div className="imprimir" id="imprimir">
        <label>Fecha Factura</label>
        <input type="text" onChange={(ev) => setFechaFactura(ev.target.value)} />
        <span> {user} es quien hizo la venta</span>
       {totalapagar!==0 &&  <span> $ {totalapagar} es el total a pagar</span>}
        <button onClick={() =>sumarprecios(carritow)}>Hacer venta</button>
        <button onClick={() =>generatePDF()}>Imprimir</button>
        {carritow && <CarritoList carritooo={carritow} user={user}></CarritoList>}
    </div>);
}

export default DoFactura;