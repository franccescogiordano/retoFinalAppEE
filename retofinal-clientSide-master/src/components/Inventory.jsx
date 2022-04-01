import React ,{ useState ,useEffect} from "react";
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import ProductsList from './ProductsList';
import { useDispatch,useSelector } from "react-redux";
import { action } from "../actions/action";

const Inventory = (props) => {

    const [total,setTotalReactPackages]=useState(null);

    const [cargado,setCargado]=useState("false");

    const { actGetProductos} = action();

   const dispatch = useDispatch();
   useEffect(() => {dispatch(actGetProductos());}, []);
   
    const {productos} = useSelector(state => state.reducerproductos);
    
   /* useEffect(() => {

        fetch('http://localhost:8080/factura')
            .then(response => response.json())
            .then(data => setTotalReactPackages(data));
           
  
    }, []);*/
    const  vender =  () => {
        setCargado("true");
    }
    
    const reponer =() => {

    }
    const verproductos =() => {

    }
   console.log(props.user.email);
    return ( 
    <>
    
    <div className="menu">
    <h2>Welcome {props.user.email}</h2>
        <h1>Que desea hacer</h1>
        <button onClick={vender}>Vender</button>
        <button onClick={reponer}>Reponer</button>
        <button onClick={verproductos}>Ver productos</button>
       { cargado==="true" &&<ProductsList total={productos}></ProductsList>}

    </div>
    </>);
}
 
export default Inventory;