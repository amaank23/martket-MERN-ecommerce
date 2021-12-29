import React from 'react'

const Sidebar = () => {
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
        <div className='sidebar'>
            <div className="category-widget">
                <div className="section-heading">
                    <h3>Categories</h3>
                </div>
                <ul>
                    {data.map((item, index) => (
                        <li key={index}><input type="checkbox" /> {item.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
