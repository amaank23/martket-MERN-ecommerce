import React, { useRef } from 'react'

const SizeSwitch = () => {
    const SizesItems = useRef([]);
    const sizes = ['XS', 'S', 'M', 'L', 'XL'];

    function selectSize(e){
        const { id } = e.target;
        SizesItems.current.map((item, index) => {
            if(item.classList.contains('active')){
                item.classList.remove('active');
                return;
            }
        })
        

        const selectedSize = SizesItems.current.filter(val => val.id === id)[0];
        selectedSize.classList.add('active');
    }
    return (
        <div className="sizes">
            <h4>Size: </h4>
            <div className="sizes-container">
                {sizes.map((size, index) => (
                    <span key={index} ref={(element) => { SizesItems.current[index] = element }} id={size} onClick={(e) => selectSize(e)}>{size}</span>
                ))}
            </div>
        </div>
    )
}

export default SizeSwitch
