import axios from 'axios';
import { AUTH_ERROR, FETCH_ADMIN, LOGIN_SUCCESS, LOGOUT } from './types';


// lOAD USER
export const loadAdmin = (token) => {
    return async dispatch => {
        if(token){
            axios.defaults.headers.common['x-auth-token'] = token;
        } else {
            delete axios.defaults.headers.common['x-auth-token'];
        }
        try {
            const res =  await axios.get('/api/user/me');

            dispatch({
                type: FETCH_ADMIN,
                payload: res.data
            });
            console.log(res.data);
        } catch (err) {
            console.log(err);
            const error = err.response.data.msg;
            dispatch({ type: AUTH_ERROR, payload: error });
        }
    }
}

// LOGIN ADMIN
export const loginAdmin = (email, password) => {
    return async dispatch => {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const body = JSON.stringify({email, password});
        try {
            const res = await axios.post('/api/user/login', body, config);

            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });


        } catch (err) {
            const error = err.response.data.errors;
            error.forEach(er => dispatch({ type: AUTH_ERROR, payload: er.msg }));
        }
    }
}

// LOGOUT USER
export const logoutUser = () => {
    return dispatch => {
            dispatch({
                type: LOGOUT
            })
        }
}