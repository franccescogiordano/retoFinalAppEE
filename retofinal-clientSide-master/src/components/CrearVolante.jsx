import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../actions/action";
const CrearVolante = () => {
    let [idproducto, setproductos] = useState("Escoja su producto a reponer")
    let [cantidad, setCantidad] = useState(0)
    let [vender2x, setvender2x] = useState("false")
    const { carritoreponer, reload } = useSelector(state => state.reducerproductos);//aca traigo info
    const dispatch = useDispatch();
    const user = props.user.email;
    //console.log("USUARIO",props);
    const productos = props.productos;
    //   console.log(productos) 
    const { actdelcarrito2, actaddcarrito2 ,actcargarproducto,actvolante} = action();
    //{ ...state, user: action.payload ,estadoLogin:""}
    let handleProdChange = (e) => {
        setproductos(e.target.value)
    }
    const agregaralcarrito2 = () => {
        dispatch(actaddcarrito2(idproducto, cantidad))
        console.log("CARRITO", carrito2)
    }


    const cargarCantidad = (e) => {
        setCantidad(parseInt(e.target.value))
    }
    const cargarproducto =() => {

        dispatch(actcargarproducto2(nombre,descripcion,stockActual,stockMinimo,stockMaximo,precio,tipo));
    }
    const onDelete = (id) => {
        dispatch(actdelcarrito2(id))
    };
    const realizarVenta = () => {
        setvender2x("true");
    }
    return (<>
        <h1>Volante Menu:</h1>
        <div>
            <label>Nombre</label>
            <input type="text" onChange={(ev) => setNombre(ev.target.value)} />
            <label>Descripcion</label>
            <input type="text" onChange={(ev) => setDescripcion(ev.target.value)} />
            <label>Tipo</label>
            <input type="text" onChange={(ev) => setTipo(ev.target.value)} />
            <label>Precio</label>
            <input type="text" onChange={(ev) => setPrecio((parseInt(ev.target.value)))} />
            <label>StockActual</label>
            <input type="text" onChange={(ev) => setStockActual(ev.target.value)} />
            <label>StockMinimo</label>
            <input type="text" onChange={(ev) => setStockMinimo(ev.target.value)} />
            <label>StockMaximo</label>
            <input type="text" onChange={(ev) => setStockMaximo(ev.target.value)} />
            <button onClick={cargarproducto}>Cargar producto</button>

        </div>
        
        <div className="container">
            <table className="table-latitude">
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Stock</th>
                </tr>
                {carritoreponer && carritoreponer.map((producto) =>
                    <tr key={producto.id}>
                        <td>{producto.nombre}</td>
                        <td>{producto.precio}</td>
                        <td>{producto.cantidad}</td>
                        <td><button onClick={() => onDelete(producto.id)}>Eliminar 🗑</button> </td>
                    </tr>)
                }
            </table>
            <button onClick={realizarVenta}>Hacer volante</button>
        </div>
    </>);
}

export default CrearVolante;