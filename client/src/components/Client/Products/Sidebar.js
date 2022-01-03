import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({ data }) => {
    return (
        <div className='sidebar'>
            <div className="category-widget">
                <div className="section-heading">
                    <h3>Categories</h3>
                </div>
                <ul>
                    {data.map((item, index) => (
                        <li key={index}><Link to={'/products?category_id=' + item._id}>{item.categoryName}</Link></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
