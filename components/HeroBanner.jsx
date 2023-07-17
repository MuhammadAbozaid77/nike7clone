import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { BiArrowBack } from "react-icons/bi";


export default function HeroBanner() {
  return <>
        <div className='w-full my-5 max-w-[1100px] relative mx-auto text-white text-[20px]'>
                <Carousel 
                    autoPlay={true}
                    infiniteLoop={true}
                    showStatus={false}
                    showThumbs={false}
                    showIndicators={false}
                    renderArrowPrev = { (clickHandler , hasPrev)=> (
                        <div onClick={clickHandler}
                             className="absolute right-[50px] bottom-[5px] w-[30px] md:w-[40px] h-[30px] md:h-[40px]
                                       bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90 "
                        >
                            <BiArrowBack className='text-sm md:text-lg'/>
                        </div>
                    ) }
                    renderArrowNext = { (clickHandler , hasNext)=> (
                        <div onClick={clickHandler}
                             className=" absolute right-[5px] bottom-[5px] w-[30px] md:w-[40px] h-[30px] md:h-[40px]
                                       bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90 "
                        >
                            <BiArrowBack className='rotate-180 text-sm md:text-lg'/>
                        </div>
                    ) }
                  
                  >
                        <div>
                            <img src="/slide-1.png" className='aspect-[16/10] md:aspect-auto object-cover' />
                            <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white 
                                            absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] 
                                            text-[15px] md:text-[30px] uppercase font-medium cursor-pointer 
                                            hover:opacity-90"
                            >
                                Shop now
                            </div>
                        </div>
                        <div>
                            <img src="/slide-2.png" className='aspect-[16/10] md:aspect-auto object-cover' />
                            <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white 
                                            absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] 
                                            text-[15px] md:text-[30px] uppercase font-medium cursor-pointer 
                                            hover:opacity-90"
                            >
                                Shop now
                            </div>
                        </div>
                        <div>
                            <img src="/slide-3.png" className='aspect-[16/10] md:aspect-auto object-cover' />
                            <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white 
                                            absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] 
                                            text-[15px] md:text-[30px] uppercase font-medium cursor-pointer 
                                            hover:opacity-90"
                            >
                                Shop now
                            </div>
                        </div>
                </Carousel>
        </div>
  </>
}
