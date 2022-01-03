import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { REMOVE_FROM_CART } from '../../../redux/actions/types';
import './Cart.css'

const Cart = ({ setCartVisibleToFalse }) => {
    const carts = useSelector(state => state.cart.cart);
    const dispatch = useDispatch();
    const [subTotal, setSubTotal] = useState(0);
    const history = useHistory();

    useEffect(() => {
        carts.map(cart => {
            setSubTotal(prevVal => prevVal + cart.product.price);
        })
        let total = 0;
        for(var product of carts){
            total += (product.product.price * parseInt(product.totalCount));
        }
        setSubTotal(total);
    }, [carts])

    function removeFromCart(id){
        dispatch({ type: REMOVE_FROM_CART, payload: { id: id } })
    }
    function redirectToCheckout(){
        history.push('/checkout');
        setCartVisibleToFalse()
    }

    return (
        <div className='cart'>
            <div className="cart-container">
                <div className="cart-heading-close">
                    <h3>My Cart</h3>
                    <button className='close-btn' onClick={setCartVisibleToFalse}>
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div className="cart-content">
                    {carts.map((cart, index) => (
                        <div className="cart-item" key={index}>
                            <span onClick={() => removeFromCart(cart.product._id)}>{cart.product.productName}</span>
                            <span>{cart.product.price * parseInt(cart.totalCount)}</span>
                        </div>
                    ))}
                   
                </div>
                <div className="cart-subtotal">
                    <span>Subtotal</span>
                    <span className="subtotal">${subTotal}</span>
                </div>
                <div className="cart-btn">
                    <button className='form-control btn' onClick={redirectToCheckout}>Proceed To Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
