import React from 'react'
import PageTitleArea from '../header/PageTitleArea'
import './Checkout.css'

const Checkout = () => {
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
                            <tr>
                                <td>Subtotal</td>
                                <td>$9.00</td>
                            </tr>
                            <tr>
                                <td>Shipping</td>
                                <td>$10.00</td>
                            </tr>
                            <tr>
                                <td>Order Total</td>
                                <td>$10</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Checkout
