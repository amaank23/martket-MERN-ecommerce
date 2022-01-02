import React from 'react'
import ProductCard from '../../Products/ProductCard'
import './NewArivals.css'

const NewArivals = ({ products }) => {
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
