'use client'
import React, {  useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import CarouselCard from './CarouselCard'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination, Autoplay } from 'swiper/modules'

const Carousel = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth <= 750)
    }
  }, [])
  return (
    <div className="w-full mt-20 px-4">
      <div className=" w-full relative overflow-hidden h-full flex justify-center lg:justify-between ">
        <div className="w-full h-36 bg-white md:block lg:block hidden absolute clip z-50 left-0 right-0 -bottom-24"></div>
        <div className="w-full h-36 bg-white md:block absolute lg:block hidden clip z-50 left-0 right-0  -top-24"></div>
        <Swiper
          spaceBetween={isMobile ? 170 : 10}
          slidesPerView={isMobile ? 2 : 6}
          loop={true}
          speed={500}
          navigation={true}
          autoplay={{
            delay: 1500,
            pauseOnMouseEnter: true,
          }}
          watchSlidesProgress={true}
          modules={[Pagination,  Autoplay]}
          className="cursor-grab"
        >
          <SwiperSlide>
            <CarouselCard image="/heroImages/hero1.jpeg" />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselCard image="/heroImages/hero2.jpeg" />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselCard image="/heroImages/hero3.jpeg" />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselCard image="/heroImages/hero4.jpeg" />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselCard image="/heroImages/hero5.jpeg" />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselCard image="/heroImages/hero6.jpeg" />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselCard image="/heroImages/hero7.jpeg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Carousel
