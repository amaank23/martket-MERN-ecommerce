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
            return;
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
                    
                        <table >
                            <caption>My Cart</caption>
                            <thead>
                                <tr>
                                <th scope="col" >Product Name</th>
                                <th scope="col">Size</th>
                                <th scope="col">Color</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price/Unit</th>
                                <th scope="col">Total Price</th>
                                </tr>
                            </thead>
                            <tbody>
                            {carts.map((cart, index) => (
                                <tr  key={index}>
                                <td data-label="Product Name">{cart.product.productName}</td>
                                <td data-label="Size">{cart.attributes.size}</td>
                                <td data-label="Color">{cart.attributes.color}</td>
                                <td data-label="Quantity">{cart.totalCount}</td>
                                <td data-label="Price">${cart.product.price}</td>
                                <td data-label="Total">${cart.product.price * parseInt(cart.totalCount)}</td>
                                <td><button className='removeFromCart' onClick={() => removeFromCart(cart.id)}>Remove from Cart</button></td>
                                </tr>

                                ))}

                                <tr>
                                    <td>Subtotal</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>${subTotal}</td>
                                </tr>
                            </tbody>
                        </table>
                        
                    
                   
                </div>
                <div className="cart-btn" style={{ marginTop: 20 }}>
                    <button className='form-control btn' onClick={redirectToCheckout}>Proceed To Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
