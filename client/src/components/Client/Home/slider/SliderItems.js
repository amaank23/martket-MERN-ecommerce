import React from 'react'

const SliderItems = ({ children, width, fullWidth, height }) => {

    return fullWidth ? (
        <div className="slider-items" style={{ flex: '0 0 100%', height: height }}>
            {children}
        </div>
    ) : (
        <div className="slider-items" style={{ flex: `0 0 ${width}`, height: height }}>
            {children}
        </div>
    )
}

SliderItems.defaultProps = {
    height: '600px'
}

export default SliderItems
