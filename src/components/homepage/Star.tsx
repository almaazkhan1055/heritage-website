import Image from 'next/image'
import React from 'react'
import { IoMdStar, IoMdStarOutline } from 'react-icons/io'

const Star = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-8 py-32 px-[10vw]">
      <Image
        src="/assets/stars/stars.png"
        alt="2 Stars"
        quality={100}
        className="h-36 w-auto"
        width={1000}
        height={1000}
      />

      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-primary text-5xl font-light font-canelaThin text-center">
          2 Star Export House
        </p>
        <p className="text-secondary text-3xl font-bold font-canelaThin text-center">
          recognized by Government of India
        </p>
      </div>
    </div>
  )
}

export default Star
