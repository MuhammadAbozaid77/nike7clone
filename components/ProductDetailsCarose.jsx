import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



export default function ProductDetailsCarose() {
  return <>
  
        <div>
            <Carousel 
                autoPlay={true}
                infiniteLoop={true}
                showStatus={false}
                showThumbs={60}
                showIndicators={false}
                className="productCarousel"
            >
                <img src="/p1.png" alt="" />    
                <img src="/p2.png" alt="" />    
                <img src="/p3.png" alt="" />    
                <img src="/p4.png" alt="" />    
                <img src="/p5.png" alt="" />    
            </Carousel>
        </div>

  </>
}
