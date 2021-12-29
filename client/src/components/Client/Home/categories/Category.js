import React from 'react'

const Category = ({ name, img }) => {
    return (
        <div className='category-home'>
            <a href="">
                <div className="cat-img">
                    <img src={require('./img/' + img).default} alt="" />
                </div>
                <div className="cat-heading">
                    <h3>{name}</h3>
                </div>
            </a>
        </div>
    )
}

export default Category
