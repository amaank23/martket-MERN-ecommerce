import React from 'react'
import "./Categories.css"
import Category from './Category'

const Categories = () => {
    const data = [
        {
            name: 'Diagnostic Sets',
            img: 'categories-img1.png'
        },
        {
            name: 'Antiseptic',
            img: 'categories-img2.png'
        },
        {
            name: 'Microscope',
            img: 'categories-img3.png'
        },
        {
            name: 'Pharmacy',
            img: 'categories-img4.png'
        },
        {
            name: 'Accessories',
            img: 'categories-img5.png'
        },
    ]
    return (
        <section className="category-section home">
            <div className="container">
                <div className="section-heading">
                    <h2>Categories</h2>
                </div>
                <div className="cat-container">
                    {data.map((category, index) => (
                        <Category key={index} name={category.name} img={category.img} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Categories
