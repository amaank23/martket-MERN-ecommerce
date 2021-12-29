import React, { useEffect, useState } from 'react'
import PageTitleArea from '../header/PageTitleArea'
import ProductCard from './ProductCard'
import Sidebar from './Sidebar'

const Products = () => {
    
    const totalItemsToShow = 3;
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
            title: 'asd Mask',
            price: 49.39,
            discountedPrice: 40.23,
            img: 'products-img4.jpg',
            sale: true,
        },
        {
            title: 'ABCD Mask',
            price: 49.39,
            discountedPrice: 40.23,
            img: 'products-img4.jpg',
            sale: true,
        }
    ]
    const [paginationBtns, setPaginationBtns] = useState(1);
    const [initialPosition, setInitialPosition] = useState(0);
    const [finalPosition, setFinalPosition] = useState(totalItemsToShow);
    useEffect(() => {
        setPaginationBtns(Math.ceil(products.length / totalItemsToShow));
    }, [])

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

export default Products
