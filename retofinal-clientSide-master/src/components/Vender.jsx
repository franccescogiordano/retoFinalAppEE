import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../actions/action";
import DoFactura from './DoFactura';
const Vender = (props) => {
    let [idproducto, setproductos] = useState("Escoja su producto")
    let [cantidad, setCantidad] = useState(0)
    let [vender2x, setvender2x] = useState("false")
    const { carrito,reload } = useSelector(state => state.reducerproductos);//aca traigo info
    const dispatch = useDispatch();
    const user = props.user.email;
    //console.log("USUARIO",props);
    const productos = props.productos;
    //   console.log(productos) 
    const { actdelcarrito,actaddcarrito } = action();
    //{ ...state, user: action.payload ,estadoLogin:""}
    let handleProdChange = (e) => {
        setproductos(e.target.value)
    }
    const agregaralcarrito = () => {
       dispatch(actaddcarrito(idproducto,cantidad))
        console.log("CARRITO",carrito)
    }


    const cargarCantidad = (e) => {
        setCantidad(parseInt(e.target.value))
    }

    const onDelete = (id) => {
        dispatch(actdelcarrito(id))
    };
    const realizarVenta = ()=>{
        setvender2x("true");
        }
    return (<>
        <h1>Vender Menu:</h1>

        <div className="App">
            {/* Displaying the value of prod */}
            {idproducto}
            <br />
            <select onChange={handleProdChange}>
            <option value="⬇️ Select a Producto ⬇️"> -- Selecciones productos -- </option>
            {productos.map((prod) => <option value={prod.id}>{prod.nombre}</option>)}
            </select>
            <label>Cantidad</label>
            <input type="text" onChange={cargarCantidad}></input>
            <button onClick={agregaralcarrito}>Agregar al carrito</button>
        </div>
        <div className="container">
            <table className="table-latitude">
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                </tr>
                {carrito && carrito.map((producto) =>
                    <tr key={producto.id}>
                        <td>{producto.nombre}</td>
                        <td>{producto.precio}</td>
                        <td>{producto.cantidad}</td>
                        <td><button onClick={() => onDelete(producto.id)}>Eliminar 🗑</button> </td>
                    </tr>)
                }
            </table>
            <button onClick={realizarVenta}>Realizar Venta</button>
            { vender2x==="true" &&<DoFactura carrtow={carrito} user={user}></DoFactura>}
        </div>
    </>);
}

export default Vender;