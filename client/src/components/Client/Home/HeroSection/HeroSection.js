import React from 'react'
import Slider from '../slider/Slider'
import HeroItem from '../slider/HeroItem'
import SliderItems from '../slider/SliderItems'

const HeroSection = () => {
    const heroSectionItems = [
        {
            title: "Triton Grip Nitrile ",
            type: "Gloves",
            desc: "Gloves protect our hands from a variety of things. Nitrile gloves are comfortable to wear.",
            subTitle: "New Arrivals",
            img: "banner-img1.png",
            price: 54,
        },
        {
            title: "Protective Surgical",
            type: "Mask",
            desc: "Gloves protect our hands from a variety of things. Nitrile gloves are comfortable to wear.",
            subTitle: "New Arrivals",
            img: "banner-img3.png",
            price: 22,
        },
        {
            title: "Safety Glasses Protective ",
            type: "Gloves",
            desc: "Gloves protect our hands from a variety of things. Nitrile gloves are comfortable to wear.",
            subTitle: "New Arrivals",
            img: "banner-img2.png",
            price: 75
        },
    ]
    return (
        <Slider items={heroSectionItems}>
            {heroSectionItems.map((item, index) => (
                <SliderItems key={index} fullWidth>
                    <HeroItem item={item} />
                </SliderItems>
            ))}
        </Slider>
    )
}

export default HeroSection
