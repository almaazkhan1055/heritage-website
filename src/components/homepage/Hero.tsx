'use client'
import { Button } from '@/components'
import Image from 'next/image'

// const heroImages = [
//   '/../heroImages/hero1.jpeg',
//   '/../heroImages/hero2.jpeg',
//   '/../heroImages/hero3.jpeg',
//   '/../heroImages/hero4.jpeg',
//   '/../heroImages/hero5.jpeg',
//   '/../heroImages/hero6.jpeg',
//   '/../heroImages/hero7.jpeg',
// ]

const Hero = () => {
  return (
    <div className="w-full flex flex-col items-center px-4 my-16 lg:my-0 lg:pt-[9rem]">
      <span className="lg:w-[37.25rem] w-full text-center text-primary lg:text-7xl md:text-5xl text-5xl font-bold font-canelaThin lg:leading-[5.5rem]">
        Heritage India Exports
      </span>
      <span className="lg:w-[22.25rem] w-full mt-5 text-center text-secondary text-base font-light font-vietnam leading-tight">
        Manufacturing timeless treasures from the heart of India for the global
        home.
      </span>
      <span className="lg:mt-[5.25rem] mt-5 flex flex-wrap items-center justify-center gap-y-3 gap-x-10 font-canela leading-tight ">
        <Button label="Explore Inventory" color="primary" route='/products' />
        <Button label="Contact Us" color="white" route='/contact' />
      </span>
    </div>
  )
}

export default Hero
