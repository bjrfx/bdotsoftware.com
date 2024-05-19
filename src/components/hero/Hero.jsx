import React from 'react'
import herobg from '../../images/hero-bg.png'
import Header from './header/Header'
import Slider from './slider/Slider'
const Hero = () => {
    return (
        <div className="hero_area">

            <div className="hero_bg_box">
                <div className="bg_img_box">
                    <img src={herobg} alt="" />
                </div>
            </div>
            <Header />
            <Slider />
        </div>
    )
}

export default Hero