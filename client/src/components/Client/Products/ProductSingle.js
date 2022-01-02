import { connect } from 'react-redux'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PageTitleArea from '../header/PageTitleArea'
import Slider from '../Home/slider/Slider'
import SliderItems from '../Home/slider/SliderItems'
import ColorSwitch from './ColorSwitch'
import SizeSwitch from './SizeSwitch'
import Tabs from './Tabs'

const ProductSingle = ({ products }) => {
    const { id } =  useParams();
    const product = products.filter(product => product._id === id)[0];
    // useEffect(() => {
        
    // }, [])
    return (
        <section className='product-single-page'>
            <PageTitleArea title="Medical Mask" />
            <div className="container">
                <div className="product-gallery">
                    <Slider>
                            <SliderItems width={'100%'} height={'100%'}>
                                <img src={product.featuredImage.imgUrl} alt="" />
                            </SliderItems>
                        {product.imageGallery.map((item, index) => (
                            <SliderItems key={index} width={'100%'} height={'100%'}>
                                <img src={item.imgUrl} alt="" />
                            </SliderItems>
                        ))}
                    </Slider>
                </div>
                <div className="product-info">
                    <div className="title">
                        <h2>{ product.productName }</h2>
                    </div>
                    <div className="price">
                        <span className="old-price">$49.39</span>
                        <span className="new-price">{product.price}</span>
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

const mapStateToProps = (state) => ({
    products: state.product.products
})

export default  connect(mapStateToProps, null)(ProductSingle)
