const initialState ={
    productos:[],
}

export const reducer = (state=initialState, action) => {
    console.log("TOY EN EL REDUCER 1",action)
    switch (action.type) {
        case "getProductos":
            console.log("TOY EN EL REDUCER zzzzzzzzzzzzzzzzzzzzzzz")
            return{
                ...state,
                productos: action.payload
            }
        default:
            return state;
    }
}