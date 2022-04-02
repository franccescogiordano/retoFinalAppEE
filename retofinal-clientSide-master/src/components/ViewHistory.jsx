import { useDispatch,useSelector } from "react-redux";
import React ,{ useState ,useEffect} from "react";
import { action } from "../actions/action";
const ViewHistory = () => {
    const dispatch = useDispatch();
    const { actGetFacturas} = action();
    useEffect(() => {dispatch(actGetFacturas());}, []);
    const {facturas} = useSelector(state => state.reducerproductos);
    return (<>
    <div className="facturasdiv" >
        <p>Historial de ventas</p>
    <ul>
    {facturas.map((item,i) => <li key={i}>
     ID:{item.id} 
    Fecha:{item.fechaFactura} 
    Quien hizo la venta:{item.quienAtendio} 
    TOTAL DE GANANCIA:${item.totalAPagar}</li> )}</ul>
    </div>
    </>  );
}
 
export default ViewHistory;