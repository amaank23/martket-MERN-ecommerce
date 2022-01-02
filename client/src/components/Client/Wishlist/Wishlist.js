import React from 'react'
import PageTitleArea from '../header/PageTitleArea'
import './Wishlist.css'

const Wishlist = () => {
    return (
        <section className='wishlist-page'>
            <PageTitleArea title={"Wishlist Page"} />
            <div className="container">
                <div className="section-heading">
                    <h2>Your Wishlist</h2>
                </div>
                <div className="wishlist-main">
                    <table className='table-bordered'>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Unit Price</th>
                                <th>Stock Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tr>
                            <td>Medical Mask</td>
                            <td>$29.34</td>
                            <td>In Stock</td>
                            <td><button className='btn'>Add To Cart</button></td>
                        </tr>
                        <tr>
                            <td>Medical Mask</td>
                            <td>$29.34</td>
                            <td>In Stock</td>
                            <td><button className='btn'>Add To Cart</button></td>
                        </tr>
                        <tr>
                            <td>Medical Mask</td>
                            <td>$29.34</td>
                            <td>In Stock</td>
                            <td><button className='btn'>Add To Cart</button></td>
                        </tr>
                        <tr>
                            <td>Medical Mask</td>
                            <td>$29.34</td>
                            <td>In Stock</td>
                            <td><button className='btn'>Add To Cart</button></td>
                        </tr>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Wishlist
