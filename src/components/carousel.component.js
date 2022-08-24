import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "./carousel.style.css";
import styled from "styled-components";
import painting1 from './images/Paintings/1.jpg'
import painting2 from './images/Paintings/2.jpg'
import painting3 from './images/Paintings/3.jpg'
import painting4 from './images/Paintings/4.jpg'
import painting5 from './images/Paintings/5.jpg'
import painting6 from './images/Paintings/6.jpg'
import painting7 from './images/Paintings/7.jpg'
import painting8 from './images/Paintings/8.jpg'
import painting9 from './images/Paintings/9.jpg'
import painting10 from './images/Paintings/10.jpg'
import painting11 from './images/Paintings/11.jpg'
import painting12 from './images/Paintings/12.jpg'


export default function CarouselComponent() {
    return (
    <div>
        <Carousel 
            infiniteLoop={true} 
            autoPlay={true} 
            showArrows={true} 
            showThumbs={false} 
            centerMode={true} 
            dynamicHeight={false} 
            showIndicators={false}
        >
            
            <div>
                <img src = {painting1} />
            </div>
            <div>
                <img src = {painting2} />
            </div>
            <div>
                <img src = {painting3} />
            </div>
            <div>
                <img src = {painting4} />
            </div>
            <div>
                <img src = {painting5} />
            </div>
            <div>
                <img src = {painting6} />
            </div>
            <div>
                <img src = {painting7} />
            </div>
            <div>
                <img src = {painting8} />
            </div>
            <div>
                <img src = {painting9} />
            </div>
            <div>
                <img src = {painting10} />
            </div>
            <div>
                <img src = {painting11} />
            </div>
            <div>
                <img src = {painting12} />
            </div>
        </Carousel>
    </div>
    );
}