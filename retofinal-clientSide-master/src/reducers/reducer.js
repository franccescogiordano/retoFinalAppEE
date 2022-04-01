const initialState = {
    productos: [],
    user: null,
    estadoLogin: "",
    estadoRegistrado:"unregister",
}

export const reducer = (state = initialState, action) => {
    console.log("TOY EN EL REDUCER 1", action)
    switch (action.type) {
        case "getProductos":
            console.log("TOY EN EL REDUCER zzzzzzzzzzzzzzzzzzzzzzz")
            return {
                ...state,
                productos: action.payload
            }
        case "logear":
            return { ...state, user: action.payload ,estadoLogin:""}
        case "deslogear":
            return { ...state, user: null, estadoLogin:"" }

        case "estadoLogin":
            return { ...state, estadoLogin: action.payload }
        case "registrar":
            return { ...state, estadoRegistrado: action.payload }
        case "reset":
            return { ...state, estadoLogin: "" , estadoRegistrado:"unregister"}
        default:
            return state;
    }
}