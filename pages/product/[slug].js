import ProductDetailsCarose from '@/components/ProductDetailsCarose';
import RelatedProducts from '@/components/RelatedProducts';
import Wrapper from '@/components/Wrapper';
import { useRouter } from 'next/router';
import React from 'react' ;
import { IoMdHeartEmpty } from "react-icons/io";


export default function Product() {
    const router = useRouter();
    let {slug} = router.query ;

  return <>
        <div className='w-full md:py-20'> 
            <Wrapper>
                <div className='flex lg:flex-row flex-col lg:gap-[100px] gap-[50px]  md:px-10'>
                    <div className='w-full md:w-auto lg:max-w-full max-w-[500px]  flex-[1.5] mx-auto lg:mx-0'>
                        <ProductDetailsCarose/>
                    </div>
                    <div className='flex-[1]  p-3'>
                        {/* PRODUCT TITLE */}
                        <div className="text-[34px] font-semibold mb-2 leading-tight">
                            Product 1
                        </div>

                        {/* PRODUCT SUBTITLE */}
                        <div className="text-lg font-semibold mb-5">
                            Product 1
                        </div>

                        {/* PRODUCT PRICE */}
                        <div className="flex items-center">
                            <p className="mr-2 text-lg font-semibold">
                                MRP : &#8377;
                            </p>
                        </div>

                        <div className="text-md font-medium text-black/[0.5]">
                            incl. of taxes
                        </div>
                        <div className="text-md font-medium text-black/[0.5] mb-20">
                            {`(Also includes all applicable duties)`}
                        </div>

                        {/* PRODUCT SIZE RANGE START */}
                        <div className="mb-10">
                            {/* HEADING START */}
                            <div className="flex justify-between mb-2">
                                <div className="text-md font-semibold">
                                    Select Size
                                </div>
                                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                                    Select Guide
                                </div>
                            </div>
                            {/* HEADING END */}

                            {/* SIZE START */}
                            <div className='grid grid-cols-3 gap-2'>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>  
                                    UK6
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>  
                                    UK6
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>  
                                    UK6
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>  
                                    UK6
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>  
                                    UK6
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>  
                                    UK6
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>  
                                    UK6
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black 
                                        cursor-not-allowed opacity-50'>  
                                    UK6
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black 
                                        cursor-not-allowed opacity-50'>  
                                    UK6
                                </div>
                            </div>
                            {/* SIZE END */}

                            {/* Add To Cart Button Start */}
                            <div>
                                <button className='w-full rounded-full bg-black text-white  font-medium 
                                                    transition-transform active:scale-95 my-3 py-3'>  
                                    Add To  Chart
                                </button>

                                <button className='w-full rounded-full font-medium border border-black 
                                                    transition-transform active:scale-95 mb-5 py-3 
                                                    hover:bg-gray-100 flex  justify-center items-center gap-3 '>  
                                    WhishList 
                                   <IoMdHeartEmpty size={20}/>
                                </button>
                            </div>
                            {/* Add To Cart Button End */}
                            <div>
                                <div className='text-lg font-bold mb-3'>
                                    Product Details
                                </div>
                                <div className='text-md  mb-5'>
                                    kfnsnfk  nosfnf osjfnos oknd  osff 
                                    kfnsnfk fnnfsf  osjfnos oknd onwn osff 
                                     fnnfsf nosfnf osjfnos oknd  osff 
                                    kfnsnfk fnnfsf nosfnf  oknd onwn osff 
                                    kfnsnfk fnnfsf nosfnf osjfnos oknd onwn osff 
                                </div>
                                <div className='text-md  mb-5'>
                                    kfnsnfk  nosfnf osjfnos oknd  osff 
                                    kfnsnfk fnnfsf  osjfnos oknd onwn osff 
                                     fnnfsf nosfnf osjfnos oknd  osff 
                                    kfnsnfk fnnfsf nosfnf  oknd onwn osff 
                                    kfnsnfk fnnfsf nosfnf osjfnos oknd onwn osff 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <RelatedProducts/>
            </Wrapper>
        </div>
  </>
}
