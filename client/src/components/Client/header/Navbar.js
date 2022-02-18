import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const Navbar = ({ setCartVisible, setSearchBarVisibleToTrueOrFalse }) => {
    const carts = useSelector(state => state.cart.cart);
    const categories = useSelector(state => state.categories.categories);
    const [dropdownVisible, setDropDownVisible] = useState(false);

    function MouseOver(){
        setDropDownVisible(true)
    }
    function MouseLeave(){
        setDropDownVisible(false)
    }
    return (
        <section>
            <div className="container">
            <nav>
                <div className='logo'><Link to={'/'}><h1>MARTKET</h1></Link></div>
                <div className='nav-links'>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li onMouseOver={MouseOver} onMouseLeave={MouseLeave}><button style={{
                            background: 'transparent',
                            border: 'none',
                            fontSize: '16px',
                            fontWeight: '600'
                        }} onClick={(e) => e.preventDefault()} >Categories</button>
                            {dropdownVisible && (
                                <ul>
                                {categories.map((category, index) => (
                                    <li key={index}><Link to={'/products?category_id=' + category._id}>{category.categoryName}</Link></li>
                                ))}
                            </ul>
                            )}
                        </li>
                    </ul>
                </div>
                <div className='wishlist-cart-search'>
                    <ul>
                        {/* <li><Link to="/wishlist"><i class="far fa-heart"></i></Link></li> */}
                        <li><button onClick={(e) => setCartVisible(e)}><i class="fas fa-shopping-cart"></i>{carts && (<span>{carts.length}</span>)}</button></li>
                        {/* <li><button href="" onClick={setSearchBarVisibleToTrueOrFalse}><i class="fas fa-search"></i></button></li> */}
                    </ul>
                </div>
            </nav>
            </div>
        </section>
    )
}

export default Navbar
