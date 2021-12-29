import React, { useEffect } from 'react';
import AdminLogin from './AdminAuth/AdminLogin';
import AdminPanel from './AdminPanel/AdminPanel';
import PrivateRoute from '../PrivateRoute';
import { Route } from 'react-router-dom';
import store from '../../redux/store';
import { TOKEN_EXIST } from '../../redux/actions/types';
import axios from "axios";


if(localStorage.getItem('token')){
    axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('token');
} else {
    delete axios.defaults.headers.common['x-auth-token'];
}

const AdminView = () => {
    useEffect(() => {
        if(localStorage.token){
            store.dispatch({type: TOKEN_EXIST});
        }
    }, [])
    return (
        <>
            <Route exact path='/admin/login'>
                <AdminLogin />
            </Route> 
            <PrivateRoute path='/admin'>
                <AdminPanel />
            </PrivateRoute>
        </>
    )
}

export default AdminView
