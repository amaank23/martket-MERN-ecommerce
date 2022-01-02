import React from 'react'
import './Cart.css'

const Cart = ({ setCartVisibleToFalse }) => {
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
                </div>
                <div className="cart-subtotal">
                    <span>Subtotal</span>
                    <span className="subtotal">$0.00</span>
                </div>
                <div className="cart-btn">
                    <button className='form-control btn'>Proceed To Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
