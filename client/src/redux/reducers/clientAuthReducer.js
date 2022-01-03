import { AUTH_ERROR_CLIENT, FETCH_CLIENT, LOGIN_SUCCESS_CLIENT, LOGOUT_CLIENT, TOKEN_EXIST_CLIENT } from "../actions/types";

const initialState = {
    isAuthenticated: false,
    customer: null,
    loading: true,
    error: null
}

export default function clientAuthReducer(state = initialState, action){
    const { type, payload } = action;
    switch(type){
        case TOKEN_EXIST_CLIENT:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                error: null
            }
        case FETCH_CLIENT:
            return {
                ...state,
                isAuthenticated: true,
                customer: payload,
                error: null
            }
        case LOGIN_SUCCESS_CLIENT:
            localStorage.setItem('token_client', payload.token);
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                error: null
            }
        case AUTH_ERROR_CLIENT:
        case LOGOUT_CLIENT:
            localStorage.removeItem('token_client');
            return {
                ...state,
                isAuthenticated: false,
                error: payload
            }
        default:
            return state;       
    }
}