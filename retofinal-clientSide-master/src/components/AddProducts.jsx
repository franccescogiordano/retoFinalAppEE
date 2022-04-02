import React ,{ useState ,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../actions/action";
const AddProducts = () => {
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [precio, setPrecio] = useState(0);
    const [stockMaximo, setStockMaximo] = useState("");
    const [stockMinimo, setStockMinimo] = useState("");
    const [stockActual, setStockActual] = useState("");
    const [tipo, setTipo] = useState("");
    const { actcargarproducto} = action();

    const dispatch = useDispatch();
    const cargarproducto =() => {
      
       // console.log(nombre,descripcion,precio,stockActual,stockMinimo,stockMaximo)
       dispatch(actcargarproducto(nombre,descripcion,stockActual,stockMinimo,stockMaximo,precio,tipo));
     
     /*   setproductoparacargar({nombre:"",
        descripcion:"",
        precio:0,
        stockactual:"",
        stockminimo:"",
        stockmaximo:"",
        tipo:""})*/
    }
    return (<>
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
    </>);
}

export default AddProducts;