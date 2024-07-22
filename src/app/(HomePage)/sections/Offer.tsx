import React from 'react'
import RoundedCard from './RoundedCard'

const Offer = () => {
  return (
    <div className="max-w-screen-xl lg:my-36 my-16 mx-auto">
      <div className="flex  items-center justify-center w-full"></div>
      <div className="relative  flex flex-wrap w-full items-center justify-center lg:justify-between">
        <RoundedCard
          img="/assets/rounded/r1.jpg"
          title="40+ years of experience"
        />
        <RoundedCard
          img="/assets/rounded/r2.jpg"
          title="Artisans all over India"
        />
        <RoundedCard img="/assets/rounded/r3.jpg" title="Competitive Pricing" />
      </div>
    </div>
  )
}

export default Offer
