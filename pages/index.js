import HeroBanner from '@/components/HeroBanner'
import ProductCard from '@/components/ProductCard'
import Wrapper from '@/components/Wrapper'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className=""> 
          <HeroBanner/>
          <Wrapper>
            {/* Heading And Pargraph Start */}
              <div className='max-w-[800px] mx-auto text-center my-[50px] md:my-[80px]'>
                  <div className='text-[28px] md:text-[34px] font-semibold mb-5 leading-tight'>
                    Nike. Just Do It.
                  </div>
                  <div className='text-md md:text-xl'>
                    Nike delivers innovative products, experiences and services to inspire athletes.
                  </div>
              </div>
              {/* Heading And Pargraph End */}

              <div className='grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-5 my-14 px-5'>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
              </div>
          </Wrapper> 
      </main> 
    </>
  )
}
