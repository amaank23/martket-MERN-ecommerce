import React from 'react'
import ProductCard from '../../Products/ProductCard'
import './NewArivals.css'

const NewArivals = () => {
    const products = [
        {
            title: 'New Microscope',
            price: 59.93,
            discountedPrice: 56.93,
            img: 'products-img1.jpg',
            sale: true,
        },
        {
            title: 'Coronavirus Face Mask',
            price: 99.01,
            discountedPrice: 96.87,
            img: 'products-img2.jpg',
            sale: true,
        },
        {
            title: 'Protective Gloves',
            price: 99.23,
            discountedPrice: 88.23,
            img: 'products-img3.jpg',
            sale: true,
        },
        {
            title: 'Medical Mask',
            price: 49.39,
            discountedPrice: 40.23,
            img: 'products-img4.jpg',
            sale: true,
        },{
            title: 'New Microscope',
            price: 59.93,
            discountedPrice: 56.93,
            img: 'products-img1.jpg',
            sale: true,
        },
        {
            title: 'Coronavirus Face Mask',
            price: 99.01,
            discountedPrice: 96.87,
            img: 'products-img2.jpg',
            sale: true,
        },
        {
            title: 'Protective Gloves',
            price: 99.23,
            discountedPrice: 88.23,
            img: 'products-img3.jpg',
            sale: true,
        },
        {
            title: 'Medical Mask',
            price: 49.39,
            discountedPrice: 40.23,
            img: 'products-img4.jpg',
            sale: true,
        }
    ]
    return (
        <section className='new-arrivals home'> 
            <div className="container">
                <div className="section-heading">
                    <h2>New Arrivals</h2>
                </div>
                <div className="new-arrival-products-container">      
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                        ))}
                </div>
            </div>
        </section>
    )
}

export default NewArivals
