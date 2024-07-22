'use client'
import React, { useRef, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Pagination, Scrollbar } from 'swiper/modules'

const flags = [
  'US',
  'EU',
  'UK',
  'AU',
  'SG',
  'CN',
  'CA',
  'CH',
  'IL',
  'JP',
  'SA',
  'TH',
  'TR',
  'PL',
  'IT',
  'ES',
  'DE',
  'FR',
  'GR',
  'IE',
]

const FlagComponent = () => {
  const swiperRef = useRef()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth <= 768)
    }
  }, [])
  return (
    <div className="bg-[#F5EFCF] w-full  flex flex-col items-center justify-center gap-5 px-5 lg:py-16 py-8 lg:mt-0 my-16">
      <div className="w-full flex items-center justify-center ">
        <p className="text-primary lg:text-3xl text-2xl font-light font-canelaThin">
          Delivering to 50+ Countries
        </p>
      </div>
      <div className="w-full flex  items-center cursor-grab justify-center">
        <Swiper
          spaceBetween={isMobile ? 30 : 10}
          slidesPerView={isMobile ? 3 : 10}
          watchSlidesProgress={true}
          modules={[Pagination]}
          loop={true}
          className="mySwiper"
        >
          {flags.map((flag, index) => (
            <SwiperSlide key={index}>
              <Image
                src={`/assets/flags/${flag}.png`}
                alt="img"
                quality={100}
                className="h-24 w-auto"
                width={1000}
                height={1000}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default FlagComponent
