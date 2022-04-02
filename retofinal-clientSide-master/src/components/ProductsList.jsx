const ProductsList = (props) => {
    console.log(props.total);
    return ( <>
    <div ><p>lista de productos</p>

    {props.total.map((item,i) => <li key={i}>Nombre producto{item.nombre}</li>)}</div>
    </> );
}
 
export default ProductsList;