import React from 'react';
import { Link } from 'react-router-dom';

const HeroItem = ({ item }) => {
    return (
        <div className="container">
            <div className='slider-item'>
            <div className='slider-info'>
                <div className="sub-title">
                    <h4>{ item.subTitle }</h4>
                </div>
                <div className="title">
                    <h1>{ item.title } <span>{ item.type }</span></h1>
                </div>
                <div className="desc">
                <p>{ item.desc }</p>
                </div>
                <div className="cta">
                    <span className='slider-cta'>
                        <Link to={'/products'} style={{
                                backgroundColor: 'var(--primary)',
                                color: '#fff',
                                border: 'none',
                                padding: '10px 29px',
                                borderRadius: '5px',
                                cursor: 'pointer',
                
                        }}>Shop Now</Link>
                    </span>
                    <span className='slider-price'>${ item.price }</span>
                </div>
            </div>
            <div className='slider-img'>
                <img src={require('./img/' + item.img).default} alt="" srcset="" />
            </div>
        </div>
        </div>
    )
}

export default HeroItem
