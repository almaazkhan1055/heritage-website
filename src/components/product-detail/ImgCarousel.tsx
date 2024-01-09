'use client'
import React, { useRef, useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/navigation'

// import required modules
import { Pagination,Navigation} from 'swiper/modules'
import Image from 'next/image'

const ImgCarousel = () => {
  return (
    <div className="w-full mt-16 ">
      <div className=" w-full relative overflow-hidden h-full flex justify-center lg:justify-between ">
        <Swiper
         
          spaceBetween={10}
          slidesPerView={1}
        
          navigation={true}
          loop={true}
       
          watchSlidesProgress={true}
          modules={[Pagination, Navigation]}
          className="mySwiper "
        >
          <SwiperSlide>
            <div>
              <Image
                alt=""
                src={'/assets/product-detail/bg.jpg'}
                width={1000}
                height={1000}
                quality={100}
                className="w-full lg:h-auto md:h-auto h-56 object-cover "
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                alt=""
                src={'/assets/product-detail/bg.jpg'}
                width={300}
                height={400}
                className="w-full lg:h-auto  md:h-auto h-56 object-cover"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default ImgCarousel
