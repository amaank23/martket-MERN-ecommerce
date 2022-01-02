import React, { useState } from 'react'
import Navbar from './Navbar'
import TopBar from './Topbar'
import './Header.css'
import Cart from '../Cart/Cart'
import SearchBar from './SearchBar'

const Header = () => {
    const [cartVisible, setCartVisible] = useState(false);
    const [searchBarVisible, setSearchBarVisible] = useState(false);

    function setCartVisibleToTrue(e){
        e.preventDefault();
        setCartVisible(true);
    }
    function setCartVisibleToFalse(){
        setCartVisible(false);
    }
    function setSearchBarVisibleToTrueOrFalse(e){
        e.preventDefault();
        setSearchBarVisible((prevValue) => !prevValue);
    }
    return (
        <header className="header">
            <TopBar />
            <Navbar setCartVisible={setCartVisibleToTrue} setSearchBarVisibleToTrueOrFalse={setSearchBarVisibleToTrueOrFalse} />
            {cartVisible && (<Cart setCartVisibleToFalse={setCartVisibleToFalse} />)}
            {searchBarVisible && (<SearchBar />)}
        </header>
    )
}

export default Header
