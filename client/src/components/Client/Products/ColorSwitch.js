import React from 'react'
import { useState, useRef } from 'react';

const ColorSwitch = () => {
    const colorsItems = useRef([]);
    const colors = ['red', 'blue', 'orange', 'black', 'yellow'];

    function selectColor(e){
        const { id } = e.target;
        colorsItems.current.map((item, index) => {
            if(item.classList.contains('active')){
                item.classList.remove('active');
                return;
            }
        })
        

        const selectedColor = colorsItems.current.filter(val => val.id === id)[0];
        selectedColor.classList.add('active');
    }
    return (
        <div className="colors">
                        <h4>Colors: </h4>
                        <div className="colors-container">
                            {
                                colors.map((color, index) => (
                                    <span key={index}  ref={(element) => { colorsItems.current[index] = element }} style={{ backgroundColor: color }} id={color} onClick={(e) => selectColor(e)}></span>
                                ))
                            }
                        </div>
        </div>
    )
}

export default ColorSwitch
