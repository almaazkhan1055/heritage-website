import React from 'react'
import RoundedCard from './RoundedCard'

const Offer = () => {
  return (
    <div className="max-w-screen-xl lg:my-36 my-24 mx-auto">
      <div className="flex  items-center justify-center w-full">
        <h1 className="font-canelaThin font-semibold lg:text-5xl md:text-4xl text-3xl text-primary">
          What do we offer ?
        </h1>
      </div>
      <div className="relative  flex flex-wrap w-full items-center justify-center lg:justify-between">
        <RoundedCard
          img="/assets/rounded/r1.jpg"
          title="40+ years of experience"
        />
        <RoundedCard
          img="/assets/rounded/r2.jpg"
          title="big product inventory"
        />
        <RoundedCard img="/assets/rounded/r3.jpg" title="competitive pricing" />
      </div>
    </div>
  )
}

export default Offer
