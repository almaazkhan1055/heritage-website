import Image from 'next/image'
import React from 'react'
import { Button } from '../../../components'
import Link from 'next/link'

const Banner = () => {
  return (
    <div className="mb-28 relative overflow-hidden w-full h-[70vh] lg:h-[85vh]">
      <Image
        alt=""
        src={'/assets/banner/homepage.jpg'}
        quality={100}
        priority={true}
        width={1000}
        height={1000}
        className="w-full -z-10 absolute h-full object-cover"
      />
      <div className="px-6 flex flex-col mx-auto  h-full">
        <div className="w-full h-[50%]  flex lg:flex-row flex-col items-start lg:p-16 p-0 justify-center gap-y-5 lg:justify-between">
          <h1 className="lg:text-7xl md:text-6xl text-4xl font-canelaThin font-extralight text-white lg:text-white">
            40+ YEARS OF <br /> EXCELLENCE
          </h1>
          <Link href={'/about'}>
          <button className="border border-white hover:border-primary px-7 py-4 text-white hover:bg-white hover:text-primary transition-all duration-200  font-semibold font-canelaThin">
            ABOUT US
          </button>
          </Link>
        </div>
        <div className="w-full h-[50%] flex items-end lg:p-16 p-0  justify-end">
          <h1 className="lg:text-6xl md:text-6xl text-4xl font-canelaThin font-thin text-white">
            DELIVERING <br /> AESTHETICS
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Banner
