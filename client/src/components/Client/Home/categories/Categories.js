import React from 'react'
import "./Categories.css"
import Category from './Category'

const Categories = ({ data }) => {
    return (
        <section className="category-section home">
            <div className="container">
                <div className="section-heading">
                    <h2>Categories</h2>
                </div>
                <div className="cat-container">
                    {data.map((category, index) => (
                        <Category key={index} name={category.categoryName} id={category._id}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Categories
