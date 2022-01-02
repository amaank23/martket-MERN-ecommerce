import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <Link to={'/product/' + product._id}>
                                    
                                <div className="product-card-inner">
                                    <div className="product-card-top">
                                        <div className="product-img">
                                            <div className="product-img-top">
                                                <span>New</span>
                                                <span>Sale</span>
                                            </div>
                                            {/* <img src={product.featuredImage.imgUrl} alt="" /> */}
                                            <LazyLoadImage
                                                alt={'image.alt'}
                                                height={'400px'}
                                                src={product.featuredImage.imgUrl} // use normal <img> attributes as props
                                                width={'100%'}
                                                effect="blur"
                                                placeholderSrc={product.featuredImage.imgUrl} />
                                                
                                        </div>
                                    </div>
                                    <div className="product-card-bottom">
                                        <div className="product-info">
                                            <h3>{product.productName}</h3>
                                            <div className="price">
                                                <span className="old-price">${product.price}</span>
                                                <span className="new-price">$25.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                </Link>
                            </div>
    )
}

export default ProductCard
