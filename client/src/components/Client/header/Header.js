import React from 'react'
import Navbar from './Navbar'
import TopBar from './Topbar'
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <TopBar />
            <Navbar />
        </header>
    )
}

export default Header
