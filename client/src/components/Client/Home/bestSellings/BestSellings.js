import React from 'react'
import ProductCard from '../../Products/ProductCard'
import Slider from '../slider/Slider'
import SliderItems from '../slider/SliderItems'
import './BestSellings.css'

const BestSellings = () => {
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
            title: 'Medical Mask',
            price: 49.39,
            discountedPrice: 40.23,
            img: 'products-img4.jpg',
            sale: true,
        },
    ]
    return (
        <section className='best-selling-section home'>
            <div className="container">
                <div className="section-heading">
                    <h2>Besy Sellings</h2>
                </div>
                <Slider>
                    {products.map((product, index) => (
                        <SliderItems key={index} width={(100 / 4) + '%' } height={'100%'}>
                            <ProductCard product={product} />
                        </SliderItems>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default BestSellings
