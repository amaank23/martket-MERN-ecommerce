import React, {useEffect} from 'react'
import './Slider.css';


const SliderContainer = ({ sliderContainer, sliderItems, right, children, setItemsLength }) => {

    function settingSliderItemsRef(){
        setItemsLength(sliderContainer.current.children.length);
        for (var i = 0; i < sliderContainer.current.children.length; i++) {
            sliderItems.current[i] = sliderContainer.current.children[i];
        }
        
    }
    useEffect(() => {
        settingSliderItemsRef();
    }, [children])
    return (
            <div style={{ right: right + 'px' }} className="slider-container" ref={(element) => {sliderContainer.current = element;}}>
                {children}
            </div>
        
    )
}

export default SliderContainer
