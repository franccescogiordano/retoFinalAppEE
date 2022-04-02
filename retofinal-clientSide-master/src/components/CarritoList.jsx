const CarritoList = (props) => {
    return ( <>
    <div ><p>lista de producto comprados</p>

    {props.carritooo.map((item,i) => <li key={i}>Nombre producto: {item.nombre} Cantidad {item.cantidad}</li>)}</div>
    </> );
}
 
export default CarritoList;