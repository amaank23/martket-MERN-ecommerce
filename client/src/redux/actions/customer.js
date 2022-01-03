import axios from 'axios';
import { AUTH_ERROR_CLIENT, FETCH_CLIENT, LOGIN_SUCCESS_CLIENT, LOGOUT_CLIENT } from './types';


// lOAD USER
export const loadCustomer = (token) => {
    return async dispatch => {
        if(token){
            axios.defaults.headers.common['x-auth-token'] = token;
        } else {
            delete axios.defaults.headers.common['x-auth-token'];
        }
        try {
            const res =  await axios.get('/api/customer/me');

            dispatch({
                type: FETCH_CLIENT,
                payload: res.data
            });
        } catch (err) {
            console.log(err);
            const error = err.response.data.msg;
            dispatch({ type: AUTH_ERROR_CLIENT, payload: error });
        }
    }
}

// LOGIN CUSTOMER
export const loginCustomer = (email, password, history) => {
    return async dispatch => {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const body = JSON.stringify({email, password});
        try {
            const res = await axios.post('/api/customer/login', body, config);

            dispatch({
                type: LOGIN_SUCCESS_CLIENT,
                payload: res.data
            });

            history.goBack();


        } catch (err) {
            const error = err.response.data.errors;
            error.forEach(er => dispatch({ type: AUTH_ERROR_CLIENT, payload: er.msg }));
        }
    }
}

// REGISTER CUSTOMER
export const registerCustomer = (name, email, password) => {
    return async dispatch => {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const body = JSON.stringify({email, password, name});
        try {
            const res = await axios.post('/api/customer', body, config);

            dispatch({
                type: LOGIN_SUCCESS_CLIENT,
                payload: res.data
            });


        } catch (err) {
            const error = err.response.data.errors;
            error.forEach(er => dispatch({ type: AUTH_ERROR_CLIENT, payload: er.msg }));
        }
    }
}

// LOGOUT USER
export const logoutCustomer = () => {
    return dispatch => {
            dispatch({
                type: LOGOUT_CLIENT
            })
        }
}