import React, { useState, useRef, useEffect, useLayoutEffect } from 'react'
import './Slider.css';
import SliderContainer from './SliderContainer';

const Slider = ({ items, children }) => {
    const [active, setActive] = useState(0);
    const [rightProperty, setRightProperty] = useState(0);
    const [itemsLength, setItemsLength] = useState(0);
    const sliderItems = useRef([]);
    let sliderContainer = useRef();

    
    
   

    // useEffect(() => {
    //     const interval = setInterval(nextSlide , 5000);
    //     return () => clearInterval(interval);
    // }, [active]);


    
    function nextSlide(){
        if(active === (itemsLength - 1)){
            setRightProperty(0);
            setActive(0);
            return;
        }
        setRightProperty((sliderItems.current[active].offsetWidth + (sliderItems.current[active].offsetWidth * active)));
        setActive((prev) => prev + 1);
    }
    function prevSlide(){
        if(active === 0){
            setRightProperty((sliderItems.current[active].offsetWidth * itemsLength) - sliderItems.current[active].offsetWidth);
            setActive(itemsLength - 1);
            return;
        }
        setRightProperty(prev => prev - sliderItems.current[active].offsetWidth);
        setActive((prev) => prev - 1);
    }

    return (
        <section className='slider'>
            <div className="slider-outer-container">     
                <SliderContainer setItemsLength={setItemsLength} sliderItems={sliderItems} sliderContainer={sliderContainer} active={active} right={rightProperty}>
                    {children}
                </SliderContainer>
            </div>
            <div className="slider-nav">
                <div className="prev-btn">
                    <button  onClick={prevSlide}>  
                        <i className="fas fa-chevron-circle-left"></i>
                    </button>
                </div>
                <div className="next-btn">
                    <button onClick={nextSlide}>
                        <i className="fas fa-chevron-circle-right"></i>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Slider
