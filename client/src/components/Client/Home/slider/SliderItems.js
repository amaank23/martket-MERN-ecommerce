import React, { useState, useEffect } from 'react'

const SliderItems = ({ children, width, fullWidth, height }) => {
    const [md, setMd] = useState(window.matchMedia("(max-width: 1175px)").matches)
    const [sm, setSm] = useState(window.matchMedia("(max-width: 768px)").matches)

    useEffect(() => {
        window.matchMedia("(max-width: 1175px)").addEventListener('change', (e) => setMd(e.matches))
        window.matchMedia("(max-width: 768px)").addEventListener('change', (e) => setSm(e.matches))
    }, [])
    return fullWidth ? (
        <div className="slider-items" style={{ flex: '0 0 100%', height: height }}>
            {children}
        </div>
    ) : (md && !sm) ? (
        (
            <div className="slider-items" style={{ flex: `0 0 50%`, height: height }}>
                {children}
            </div>
        )
    ) : (md && sm) ? (
        (
            <div className="slider-items" style={{ flex: `0 0 100%`, height: height }}>
                {children}
            </div>
        )
    ) : (
        (
            <div className="slider-items" style={{ flex: `0 0 ${width}`, height: height }}>
                {children}
            </div>
        )
    )
}

SliderItems.defaultProps = {
    height: '600px'
}

export default SliderItems
