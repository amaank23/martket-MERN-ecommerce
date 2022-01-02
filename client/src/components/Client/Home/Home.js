import React from 'react'
import { connect } from 'react-redux'
import Header from '../header/Header'
import BestSellings from './bestSellings/BestSellings'
import Categories from './categories/Categories'
import HeroSection from './HeroSection/HeroSection'
import NewArivals from './newArivals/NewArivals'

const Home = ({ products, categories }) => {
    return (
        <>
            <HeroSection />
            <Categories data={categories} />
            <BestSellings products={products} />
            <NewArivals  products={products} />
        </>
    )
}


const mapStateToProps = state => ({
    products: state.product.products,
    categories: state.categories.categories
})

export default connect(mapStateToProps, null)(Home)
