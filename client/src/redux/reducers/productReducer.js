import { ADD_PRORUCT, DELETE_PRODUCT, GET_PRODUCTS } from "../actions/types";

const initialState = {
    products: []
}

export default function productReducer(state = initialState, action){
    const { type, payload } = action;
    switch (type) {
        case GET_PRODUCTS:
            return {
                products: payload
            }
        case ADD_PRORUCT:
            return {
                products: [...state.products, payload]
            }
        case DELETE_PRODUCT:
            let newState = state.products.filter(product => product._id !== payload);
            return {
                products: [...newState]
            }
        default:
            return state;
    }
}