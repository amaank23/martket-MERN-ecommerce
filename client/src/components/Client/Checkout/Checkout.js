import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import PageTitleArea from '../header/PageTitleArea'
import './Checkout.css'

const Checkout = () => {
    const carts = useSelector(state => state.cart.cart);
    const [subTotal, setSubTotal] = useState(0);
    const [shippingPrice, setShippingPrice] = useState(10.00);
    const [orderPlaced, setOrderPlaced] = useState(false);
    useEffect(() => {
        carts.map(cart => {
            setSubTotal(prevVal => prevVal + cart.product.price);
        })
        let total = 0;
        for(var product of carts){
            total += (product.product.price * parseInt(product.totalCount));
        }
        setSubTotal(total);

        return () => setOrderPlaced(false);
    }, [])
    return (
        <section className='checkout-page'>
            <PageTitleArea title={"Checkout Page"} />
            <div className="container">
                <div className="section-heading">
                    <h2>Your Order</h2>
                </div>
                <div className="checkout-main">
                    <table className='table-bordered'>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {carts.map((cart, index) => (
                            <tr key={index}>
                                <td>{cart.product.productName}</td>
                                <td>{cart.product.price * parseInt(cart.totalCount)}</td>
                            </tr>
                            ))}
                            <tr>
                                <td>Subtotal</td>
                                <td>${subTotal.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>Shipping</td>
                                <td>${shippingPrice}</td>
                            </tr>
                            <tr>
                                <td>Order Total</td>
                                <td>${(subTotal + shippingPrice).toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>
                    {orderPlaced && (     
                        <div className="order-placed">
                            <p>Order Placed, Thanks for Ordering</p>
                        </div>
                    )}
                    <button className='btn form-control' onClick={() => setOrderPlaced(true)}>Place Order</button>
                </div>
            </div>
        </section>
    )
}

export default Checkout
