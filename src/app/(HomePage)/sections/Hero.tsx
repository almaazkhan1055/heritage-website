'use client'
import { Button } from '@/components'
import Image from 'next/image'
import Star from './Star'

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
    <div className="md:flex items-center justify-center lg:pl-28 pl-8 lg:py-20 pt-20 pb-0 ">
      <div className="w-full lg:w-[60%] flex flex-col items-center ">
        <em className="w-full text-primary lg:text-5xl md:text-3xl text-2xl font-bold font-canelaThin lg:leading-[5.5rem] text-left">
          Heritage India Exports
        </em>
        <span className="w-full text-secondary text-base font-light font-vietnam leading-tight text-left">
          Manufacturing timeless treasures from <br /> the heart of India for
          the global home.
        </span>
        <span className="w-full mt-5 flex flex-wrap items-center gap-y-3 gap-x-10 font-canela leading-tight justify-start">
          <Button
            label="Explore our Collection"
            color="primary"
            route="/products"
          />
          <Button label="Contact Us" color="white" route="/contact" />
        </span>
      </div>
      <Star />
    </div>
  )
}

export default Hero
