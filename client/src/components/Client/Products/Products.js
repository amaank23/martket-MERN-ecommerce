import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import PageTitleArea from '../header/PageTitleArea'
import ProductCard from './ProductCard'
import Sidebar from './Sidebar'

const Products = ({ products }) => {
    
    const totalItemsToShow = 3;
    const [paginationBtns, setPaginationBtns] = useState(1);
    const [initialPosition, setInitialPosition] = useState(0);
    const [finalPosition, setFinalPosition] = useState(totalItemsToShow);
    useEffect(() => {
        setPaginationBtns(Math.ceil(products.length / totalItemsToShow));
    }, [products])

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
                <Sidebar />
                <div className="products-products-page">
                    <div className="sorting-div">
                        <div className="result-count">
                            <p>We found 9 products available for you</p>
                        </div>
                        <div className="sort-select">
                            <span>Sort By: </span>
                            <select name="" id="">
                                <option value="">Default</option>
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                            </select>
                        </div>

                    </div>
                    <div className="products-container">    
                        {products.slice(initialPosition, finalPosition).map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))}
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
                                <button onClick={nextPage} disabled={finalPosition >= products.length}>
                                    
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
    products: state.product.products
})
export default connect(mapStateToProps, null)(Products) 
