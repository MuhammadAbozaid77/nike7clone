import ProductCard from '@/components/ProductCard';
import Wrapper from '@/components/Wrapper';
import React from 'react';
import { useRouter } from 'next/router'



export default function Category() {
    const router = useRouter();
    let {slug} = router.query 
  return <>

        <div className='w-full md:py-20'>
            <Wrapper>
                <p className='text-center py-5 font-black text-lg'> {slug} </p>
                <div >
                    <div className='text-center text-lg font-bold text-[25px]'> Shoes Running </div>
                    <div className='grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-5 my-14 px-5'>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                  </div>
                </div>
            </Wrapper>
        </div>

  </>
}
