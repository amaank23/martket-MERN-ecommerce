import React from 'react'
import { Link } from 'react-router-dom'
import LangMenu from './LangMenu'

const TopBar = () => {
    return (
        <section className="topbar-sec">
            <div className="container">
                <div className="topbar">
                    
                <div className="top-1">
                    <p><i class="fas fa-phone-alt"></i> (+123) 456-7898</p>
                    <p><i class="fas fa-map-marker-alt"></i> 6890 Blvd, The Bronx, NY 1058, USA</p>
                    
                </div>
                <div className="top-2">
                    <LangMenu items={[['English', 'uk'], ['German', 'de'], ['French', 'fr']]} />
                    <span style={{padding: '0 9px'}}><Link to="/auth">My Account</Link></span>
                </div>
                </div>
            </div>
        </section>
    )
}

export default TopBar
