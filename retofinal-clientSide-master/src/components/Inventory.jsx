import React ,{ useState ,useEffect} from "react";
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import ProductsList from './ProductsList';
import { useDispatch,useSelector } from "react-redux";
import { action } from "../actions/action";
import Vender from '../components/Vender';
const Inventory = (props) => {
    const user=props.user.user;
  //console.log("props",)

    const [cargado,setCargado]=useState("false");
    const [venderx,setVender]=useState("false");
    const { actGetProductos} = action();

   const dispatch = useDispatch();
   useEffect(() => {dispatch(actGetProductos());}, []);
   
    const {productos} = useSelector(state => state.reducerproductos);
    const  vender =  () => {
        setVender("true");
    }
    
    const reponer =() => {

    }
    const verproductos =() => {
        setCargado("true");
    }

    return ( 
    <>
    
    <div className="container">
    <h2>{user.email}</h2>
    <br />
    <h2>Bienvenido campeonnn</h2>
        <h1>¿Que desea hacer?</h1>
        <div className=".container-login">
        <button onClick={vender}>Vender</button>
        <button onClick={reponer}>Reponer</button>
        <button onClick={verproductos}>Ver productos</button>
        </div>
       { cargado==="true" &&<ProductsList total={productos}></ProductsList>}
       { venderx==="true" &&<Vender productos={productos} user={user}></Vender>}
    </div>
    </>);
}
 
export default Inventory;