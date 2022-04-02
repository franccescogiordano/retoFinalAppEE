const initialState = {
    productos: [],
    user: null,
    estadoLogin: "",
    estadoRegistrado: "unregister",
    reload: false,
    carrito: [],
    facturas:[],
}

export const reducer = (state = initialState, action) => {
    // console.log("TOY EN EL REDUCER 1", action)
    switch (action.type) {
        case "getProductos":
            return {
                ...state,
                productos: action.payload
            }
            case "getFacturas":
                return {
                    ...state,
                    facturas: action.payload
                }    
        case "logear":
            return { ...state, user: action.payload, estadoLogin: "" }
        case "deslogear":
            return { ...state, user: null, estadoLogin: "" }
        case "reload":
            return { ...state, reload: action.payload }
        case "estadoLogin":
            return { ...state, estadoLogin: action.payload }
        case "registrar":
            return { ...state, estadoRegistrado: action.payload }
        case "reset":
            return { ...state, estadoLogin: "", estadoRegistrado: "unregister" }
        case "addcarrito":
            const cantidad = action.payload.cantidad;
            const productoadd = ([...state.carrito, {
                ...(state.productos.find(producto => producto.id === action.payload.idproducto)),
                cantidad
            }]);
            return { ...state, carrito: productoadd }

        case "delcarrito":
            const listUpDelete = state.carrito;
            const listUpdate = listUpDelete.filter((producto) => {
                return producto.id !== action.payload.idproducto;
             });
             return { ...state, carrito: listUpdate }
        case "cargarproducto":
            //    console.log("payload carrito", action.payload)
                const productosactuales = ([...state.productos, action.payload]);
                console.log(productosactuales)
                return { ...state, productos: productosactuales }
        case "cargarfactura":
        const facturasactuales = ([...state.facturas, action.payload]);
        return { ...state,facturas: facturasactuales}
        default:
            return state;
    }
}