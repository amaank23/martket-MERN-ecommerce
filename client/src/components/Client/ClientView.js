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
import { connect } from 'react-redux';
import { getProduct } from '../../redux/actions/products';
import { getCategories } from '../../redux/actions/category'

const ClientView = ({ getProduct, getCategories }) => {
    useEffect(() => {
        getProduct();
        getCategories();
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
                <Route exact path="/checkout">
                    <Checkout />
                </Route>
        </>
    )
}



export default connect(null, { getProduct, getCategories })(ClientView)
