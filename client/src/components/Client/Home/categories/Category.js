import React from 'react'
import { Link } from 'react-router-dom'

const Category = ({ name, id }) => {
    return (
        <div className='category-home'>
            <Link to={"/products?category_id=" + id}>
                <div className="cat-heading">
                    <h3>{name}</h3>
                </div>
            </Link>
        </div>
    )
}

export default Category
