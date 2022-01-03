import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const Navbar = ({ setCartVisible, setSearchBarVisibleToTrueOrFalse }) => {
    const carts = useSelector(state => state.cart.cart);
    const categories = useSelector(state => state.categories.categories);
    const data = [
        {
            name: 'Diagnostic Sets'
        },
        {
            name: 'Antiseptic'
        },
        {
            name: 'Microscope'
        },
        {
            name: 'Pharmacy'
        },
        {
            name: 'Accessories'
        },
    ]
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
                <div className='logo'><h1>MARTKET</h1></div>
                <div className='nav-links'>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li onMouseOver={MouseOver} onMouseLeave={MouseLeave}><a href="" onClick={(e) => e.preventDefault()} >Categories</a>
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
                        <li><a href="" onClick={(e) => setCartVisible(e)}><i class="fas fa-shopping-cart"></i>{carts && (<span>{carts.length}</span>)}</a></li>
                        <li><a href="" onClick={setSearchBarVisibleToTrueOrFalse}><i class="fas fa-search"></i></a></li>
                    </ul>
                </div>
            </nav>
            </div>
        </section>
    )
}

export default Navbar
