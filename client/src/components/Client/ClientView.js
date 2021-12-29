import React from 'react';
import { Route } from 'react-router';
import Home from './Home/Home';
import ClientLayout from '../Layout/ClientLayout';
import Header from './header/Header';
import Products from './Products/Products';
import ClientAuth from './ClientAuth/ClientAuth';
import ProductSingle from './Products/ProductSingle';

const ClientView = () => {
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
        </>
    )
}

export default ClientView
