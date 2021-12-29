import React from 'react'

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
                                <div className="product-card-inner">
                                    <div className="product-card-top">
                                        <div className="product-img">
                                            <div className="product-img-top">
                                                <span>New</span>
                                                <span>Sale</span>
                                            </div>
                                            <img src={require('./img/' + product.img).default} alt="" />
                                        </div>
                                    </div>
                                    <div className="product-card-bottom">
                                        <div className="product-info">
                                            <h3>{product.title}</h3>
                                            <div className="price">
                                                <span className="old-price">${product.price}</span>
                                                <span className="new-price">${product.discountedPrice}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    )
}

export default ProductCard
