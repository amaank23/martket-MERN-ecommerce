import React from 'react'
import Header from '../header/Header'
import BestSellings from './bestSellings/BestSellings'
import Categories from './categories/Categories'
import HeroSection from './HeroSection/HeroSection'
import NewArivals from './newArivals/NewArivals'

const Home = () => {
    return (
        <>
            <HeroSection />
            <Categories />
            <BestSellings />
            <NewArivals />
        </>
    )
}

export default Home
