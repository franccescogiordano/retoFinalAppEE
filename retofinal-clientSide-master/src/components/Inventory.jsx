import React ,{ useState ,useEffect} from "react";
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import ProductsList from './ProductsList';
import ViewHistory from './ViewHistory';
import { useDispatch,useSelector } from "react-redux";
import { action } from "../actions/action";
import Vender from '../components/Vender';
import AddProducts from '../components/AddProducts';

const Inventory = (props) => {
    
    const user=props.user.user;
  //console.log("props",)

    const [cargado,setCargado]=useState("false");
    const [cargado2,setCargado2]=useState("false");
    const [meter,setMeter]=useState("false");
    const [venderx,setVender]=useState("false");
    const { actGetProductos,actGetFacturas} = action();

   const dispatch = useDispatch();
   useEffect(() => {dispatch(actGetProductos());}, []);
   
    const {productos} = useSelector(state => state.reducerproductos);

    useEffect(() => {dispatch(actGetFacturas());}, []);
   
    const {facturas} = useSelector(state => state.reducerproductos);
    //console.log(facturas);
    const  vender =  () => {
        setVender("true");
    }
    
    const reponer =() => {

    }
    const verproductos =() => {
        setCargado("true");
    }
    const meterproductos =() => {
        setMeter("true");
    }
    const verfacturas=()=>{
        setCargado2("true");
    }
    return ( 
    <>
    
    <div className="inventory">
    <h2>{user.email}</h2>
    <br />
    <h2>Bienvenido campeonnn</h2>
        <h1>¿Que desea hacer?</h1>
        <div className="container-login">
        <button className="botonesanashe" onClick={vender}>Vender</button>
        <button  className="botonesanashe" onClick={reponer}>Reponer</button>
        <button className="botonesanashe" onClick={verproductos}>Ver productos</button>
        <button className="botonesanashe" onClick={verfacturas}>Ver Historial</button>
        <button className="botonesanashe" onClick={meterproductos}>Cargar productos</button>
        </div>
       { cargado==="true" &&<ProductsList total={productos}></ProductsList>}
       { cargado2==="true" &&<ViewHistory facturas={facturas}></ViewHistory>}
       { venderx==="true" &&<Vender productos={productos} user={user}></Vender>}
       { meter==="true" &&<AddProducts></AddProducts>}
    </div>
    </>);
}
 
export default Inventory;