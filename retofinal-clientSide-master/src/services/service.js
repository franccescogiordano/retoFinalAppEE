export const service = () =>{
   /* const getProductos =(tier)=>{
        return axios({
            method: 'GET',
            url: `/top/anime/1/${tier}`,
        })
    }
*/
const getProductos =()=>{
    return fetch('http://localhost:8080/factura')({
        method: 'GET',
        url: `http://localhost:8080/factura`,
    })
}
    return{
        getProductos,
    }
}