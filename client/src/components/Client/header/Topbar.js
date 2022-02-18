import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutCustomer } from '../../../redux/actions/customer'
import { connect } from 'react-redux'

const TopBar = ({ logoutCustomer }) => {
    const isAuthenticated = useSelector(state => state.clientAuth.isAuthenticated);

    function logout(){
        logoutCustomer();
    }
    return (
        <section className="topbar-sec">
            <div className="container">
                <div className="topbar">
                    
                <div className="top-1">
                    <p><i class="fas fa-phone-alt"></i> (+999) 999-999</p>
                    {/* <p><i class="fas fa-map-marker-alt"></i> House #, The Bronx, NY 1058, USA</p> */}
                    
                </div>
                <div className="top-2">
                    <span style={{padding: '0 9px'}}><Link to="/auth">My Account</Link></span>
                    {isAuthenticated && (
                        <button className='btn' style={{ fontSize: '16px', padding: '5px 10px' }} onClick={logout}>Logout</button>
                    )}
                </div>
                </div>
            </div>
        </section>
    )
}

export default connect(null, { logoutCustomer })(TopBar)
