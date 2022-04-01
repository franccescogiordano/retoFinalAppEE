import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../actions/action";
const Vender = (props) => {
    let [idproducto, setproductos] = useState("Escoja su producto")
    let [cantidad, setCantidad] = useState(0)
    const { carrito,reload } = useSelector(state => state.reducerproductos);//aca traigo info
    const dispatch = useDispatch();
    const user = props.user.user;
    const productos = props.productos;
    //   console.log(productos) 
    const { actreload,actaddcarrito } = action();
    //{ ...state, user: action.payload ,estadoLogin:""}
    let handleFruitChange = (e) => {
        setproductos(e.target.value)
    }
    const agregaralcarrito = (e) => {
   /*     setCarrito([...carrito, {
            ...(productos.find(producto => producto.id == idproducto)),
            cantidad
        }])*/
       dispatch(actaddcarrito(idproducto,cantidad))
       
        dispatch(actreload(false));
        console.log(carrito)
        dispatch(actreload(true));
    }


    const cargarCantidad = (e) => {
        setCantidad(parseInt(e.target.value))

    }

    const OnDelete = (id) => {
      /*  const listUpDelete = carrito;
        const listUpdate = listUpDelete.filter((producto) => {
            console.log("IDS:", producto.id, id)
            return producto.id !== id;
        });

        setCarrito([{ listUpdate }])
        dispatch(actreload(false));
        console.log(carrito)
        console.log(reload)
        dispatch(actreload(true));
        console.log(reload)*/
    };
    return (<>
        <h1>Vender Menu:</h1>

        <div className="App">
            {/* Displaying the value of fruit */}
            {idproducto}
            <br />
            <select onChange={handleFruitChange}>
                <option value="⬇️ Select a Producto ⬇️"> -- Selecciones productos -- </option>
                {productos.map((fruit) => <option value={fruit.id}>{fruit.nombre}</option>)}
            </select>
            <label>Cantidad</label>
            <input type="text" onChange={cargarCantidad}></input>
            <button onClick={agregaralcarrito}>Agregar al carrito</button>
        </div>

        <div className="App">
            <table>
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                </tr>
                <tr>
                    <td>Anom</td>
                    <td>19</td>
                    <td>Male</td>
                </tr>
                {reload && carrito.map((producto) =>
                    <tr key={producto.id}>
                        <td>{producto.nombre}</td>
                        <td>{producto.precio}</td>
                        <td>{producto.cantidad}</td>
                        <td><button onClick={() => OnDelete(producto.id)}>Eliminar 🗑</button> </td>
                    </tr>)
                }



            </table>
        </div>
    </>);
}

export default Vender;