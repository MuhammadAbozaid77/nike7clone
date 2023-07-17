import Link from 'next/link';
import React from 'react';



export default function ProductCard() {
  return <>
    
    <Link href="/product/1" className='transform duration-200 hover:scale-105 overflow-hidden bg-white  cursor-pointer'>
        <img className='w-full rounded-md' src="/p1.png" alt="" />
        <div className='py-3 p-3'>
            <h2 className='text-lg font-medium'> Product 1 </h2>
            <div className='flex gap-3 items-center'> 
                <p className='font-semibold text-lg mr-2'> Details </p>
                <p className='font-medium text-base line-through'> 25.00 $ </p>
                <p className='ml-auto bg-green-500 p-2 rounded-md text-base'> 20% OFF </p>
            </div>
        </div>
    </Link>
  
  </>
}
