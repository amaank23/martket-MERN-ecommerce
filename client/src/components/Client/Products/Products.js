import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'
import PageTitleArea from '../header/PageTitleArea'
import ProductCard from './ProductCard'
import Sidebar from './Sidebar'

const Products = ({ products, categories }) => {
    const { search } = useLocation();
    const categoryQueryString = new URLSearchParams(search);
    const totalItemsToShow = 3;
    const [paginationBtns, setPaginationBtns] = useState(1);
    const [initialPosition, setInitialPosition] = useState(0);
    const [finalPosition, setFinalPosition] = useState(totalItemsToShow);
    const productData = categoryQueryString.get('category_id') ? products.filter(item => item.category === categoryQueryString.get('category_id')) : [...products];
    useEffect(() => {
        setInitialPosition(0)
        setFinalPosition(totalItemsToShow)
        setPaginationBtns(Math.ceil(productData.length / totalItemsToShow));
    }, [productData.length])

    function changePage(num){
        const position = totalItemsToShow * (num - 1);
        setInitialPosition(position);
        setFinalPosition(position + totalItemsToShow);
    }
    function nextPage(){
        setInitialPosition((prevValue) => prevValue + totalItemsToShow);
        setFinalPosition((prevValue) => prevValue + totalItemsToShow);
    }
    function prevPage(){
        setInitialPosition((prevValue) => prevValue - totalItemsToShow);
        setFinalPosition((prevValue) => prevValue - totalItemsToShow);
    }
    return (
        <section className='products-page'>
            <PageTitleArea title={"Products Page"} />
            <div className="container">
                <Sidebar data={categories} />
                <div className="products-products-page">
                    <div className="sorting-div">
                        <div className="result-count">
                            <p>We found { productData.length } products available for you</p>
                        </div>

                    </div>
                    <div className="products-container">    
                        {productData.length > 0 ? productData.slice(initialPosition, finalPosition).map((product, index) => (
                            <ProductCard key={index} product={product} />
                        )) : 'No Products Found'}
                    </div>
                    <div className="pagination">
                        <div className="btns-container">
                            <span className='prev-page'>
                                <button onClick={prevPage} disabled={initialPosition === 0}>
                                    <i class="fas fa-backward"></i>
                                </button>
                            </span>
                            <div className="pages-btn">
                                {[...Array(paginationBtns).keys()].map((num, index) => (
                                    <button key={index} onClick={() => changePage(num+1)}>{num + 1}</button>
                                ))}
                            </div>
                            <span className='next-page'>
                                <button onClick={nextPage} disabled={finalPosition >= productData.length}>
                                    
                                <i class="fas fa-forward"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>           
            </div>
        </section>
    )
}
const mapStateToProps = state => ({
    products: state.product.products,
    categories: state.categories.categories
})
export default connect(mapStateToProps, null)(Products) 
