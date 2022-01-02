import React from 'react'
import ProductCard from '../../Products/ProductCard'
import Slider from '../slider/Slider'
import SliderItems from '../slider/SliderItems'
import './BestSellings.css'

const BestSellings = ({ products }) => {
    return products ?  (
        <section className='best-selling-section home'>
            <div className="container">
                <div className="section-heading">
                    <h2>Besy Sellings</h2>
                </div>
                <Slider>
                    {products.slice(0, 7).map((product, index) => (
                        <SliderItems key={index} width={(100 / 4) + '%' } height={'100%'}>
                            <ProductCard product={product} />
                        </SliderItems>
                    ))}
                </Slider>
            </div>
        </section>
    ) : 'LOADING'
}

export default BestSellings
