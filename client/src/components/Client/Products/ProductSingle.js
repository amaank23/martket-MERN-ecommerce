import React from 'react'
import PageTitleArea from '../header/PageTitleArea'
import Slider from '../Home/slider/Slider'
import SliderItems from '../Home/slider/SliderItems'
import ColorSwitch from './ColorSwitch'
import SizeSwitch from './SizeSwitch'
import Tabs from './Tabs'

const ProductSingle = () => {
    const products = [
        {
            img: 'products-img1.jpg'
        },
        {
            img: 'products-img2.jpg'
        },
        {
            img: 'products-img3.jpg'
        },
        {
            img: 'products-img4.jpg'
        }
    ]
    return (
        <section className='product-single-page'>
            <PageTitleArea title="Medical Mask" />
            <div className="container">
                <div className="product-gallery">
                    <Slider>
                        {products.map((item, index) => (
                            <SliderItems key={index} width={'100%'} height={'100%'}>
                                <img src={require('./img/' + item.img).default} alt="" />
                            </SliderItems>
                        ))}
                    </Slider>
                </div>
                <div className="product-info">
                    <div className="title">
                        <h2>Medical Mask</h2>
                    </div>
                    <div className="price">
                        <span className="old-price">$49.39</span>
                        <span className="new-price">$46.92</span>
                    </div>
                    <div className="small-info">
                        <ul>
                            <li><span>Vendor: </span>Lereve</li>
                            <li><span>Availability: </span>In Stock (7 Items)</li>
                            <li><span>Product Type: </span>Medical</li>
                        </ul>
                    </div>
                    <ColorSwitch />
                    <SizeSwitch />
                    <div className="product-add-to-cart">
                            <div className="input-counter">
                                <input type="number" name="" id="" />
                            </div>
                            <button className='btn'><i class="fas fa-shopping-cart"></i> Add to Cart</button>
                        </div>
                </div>
            </div>
            <div className="container">
                <Tabs />
            </div>
        </section>
    )
}

export default ProductSingle
