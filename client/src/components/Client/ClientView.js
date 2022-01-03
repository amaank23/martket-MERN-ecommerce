import React, { useEffect } from 'react';
import { Route } from 'react-router';
import Home from './Home/Home';
import ClientLayout from '../Layout/ClientLayout';
import Header from './header/Header';
import Products from './Products/Products';
import ClientAuth from './ClientAuth/ClientAuth';
import ProductSingle from './Products/ProductSingle';
import Wishlist from './Wishlist/Wishlist';
import Checkout from './Checkout/Checkout';
import ClientPrivateRoute from '../ClientPrivateRoute';
import store from '../../redux/store';
import { TOKEN_EXIST_CLIENT } from '../../redux/actions/types';
import { loadCustomer } from '../../redux/actions/customer';
import { connect } from 'react-redux';

const ClientView = ({ loadCustomer }) => {
    useEffect(() => {
        if(localStorage.token_client){
            store.dispatch({type: TOKEN_EXIST_CLIENT});
            loadCustomer(localStorage.token_client);
        }
    }, [])
    return (
        <>
            <Header />
                <Route exact path="/">
                    <Home />
                </Route> 
                <Route exact path="/products">
                    <Products />
                </Route> 
                <Route exact path="/auth">
                    <ClientAuth />
                </Route> 
                <Route exact path="/product/:id">
                    <ProductSingle />
                </Route>
                <Route exact path="/wishlist">
                    <Wishlist />
                </Route>
                <ClientPrivateRoute exact path="/checkout">
                    <Checkout />
                </ClientPrivateRoute>
        </>
    )
}



export default connect(null, { loadCustomer })(ClientView)
