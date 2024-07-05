'use client'
import React, { useRef, useEffect, useState } from 'react'
import './Products.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Pagination, Scrollbar } from 'swiper/modules'
import Link from 'next/link'
import fs from 'fs'

const arr = [
  {
    name: 'Stockings',
    img: 1,
  },
  {
    name: 'Pillows',
    img: 2,
  },
  {
    name: 'Tassels',
    img: 3,
  },
  {
    name: 'Bottle Stoppers',
    img: 6
  },
  {
    name: 'Bells',
    img: 5,
  },

  {
    name: 'Sofa Throws',
    img: 4,
  },
  {
    name: 'Napkin Rings',
    img: 7
  },
  {
    name: 'Coasters',
    img: 8
  },
  {
    name: 'Salad Bowl',
    img: 9
  }
]


const Products = ({products}: {products: {name: string, image: string}[]}) => {
  const swiperRef = useRef()
  const [isMobile, setIsMobile] = useState(false)
console.log(products)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth <= 768)
    }
  }, [])

  return (
    <div className="max-w-screen-xl px-5 lg:my-48 my-24 flex flex-col gap-2 items-center justify-center mx-auto">
      <div className="w-full items-center lg:justify-end justify-between flex">
        <p className="text-primary lg:hidden text-2xl font-canelaMedium">
          Products
        </p>
        <Link href={'/products'}><p className="text-primary text-lg hover:text-black font-canela">See all</p></Link>
      </div>

      <div className="h-96 relative cursor-grab w-full">
        <div className="absolute z-10 -left-48 top-10 hidden lg:block md:block -rotate-90">
          <h1 className="text-primary font-canelaThin text-7xl">PRODUCTS</h1>
        </div>

        <Swiper 
        style={{height:'450px'}}
          scrollbar={{ draggable: true, dragSize: 24 }}
          spaceBetween={isMobile ? 30 : 10}
          slidesPerView={isMobile ? 1 : 4}
          watchSlidesProgress={true}
          modules={[Pagination, Scrollbar]}
          className="mySwiper"
        >
          {products.map((item, index) => (
            <SwiperSlide style={{ backgroundColor: '#f0f1f3', height:'400px' }} key={index}>
            
              <div className="w-full h-full flex flex-col items-center justify-center p-3">
                <Image
                  alt={`img-${index}`}
                  src={`/content/products/${item.image}`}
                  quality={100}
                  width={1000}
                  height={1000}
                  className="h-[350px] w-auto p-4 object-scale-down"
                />
                  <div className="w-full h-12 px-3 py-3">
                <p className="text-primary font-canelaThin text-center font-bold">{item.name}</p>
              </div>
              </div>
              
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Products
