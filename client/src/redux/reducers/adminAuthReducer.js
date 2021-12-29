import { AUTH_ERROR, FETCH_ADMIN, LOGIN_SUCCESS, LOGOUT, TOKEN_EXIST } from "../actions/types";

const initialState = {
    isAuthenticated: false,
    admin: null,
    loading: true,
    error: null
}

export default function adminAuthReducer(state = initialState, action){
    const { type, payload } = action;
    switch(type){
        case TOKEN_EXIST:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                error: null
            }
        case FETCH_ADMIN:
            return {
                ...state,
                isAuthenticated: true,
                admin: payload,
                error: null
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                error: null
            }
        case AUTH_ERROR:
        case LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                isAuthenticated: false,
                error: payload
            }
        default:
            return state;       
    }
}