import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/types";

const initialState = {
    cart: localStorage.getItem("cart") ? [...JSON.parse(localStorage.getItem("cart"))] : []
}

export default function cartReducer(state = initialState, action){
    const { type, payload } = action;

    switch(type){
        case ADD_TO_CART:
            localStorage.setItem("cart", JSON.stringify([...state.cart, payload]));
            return {
                cart: [...state.cart, payload]
            }
        case REMOVE_FROM_CART:
            // get product id in the payload
            const newCart = state.cart.filter(item => item.product._id !== payload.id);
            localStorage.setItem("cart", JSON.stringify([...newCart]));
            return {
                cart: [...newCart]
            }
        default:
            return state;
    }
}