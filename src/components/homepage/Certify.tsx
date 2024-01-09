import React from 'react'
import Image from 'next/image'

const Certify = () => {
  return (
    <div className="banner  lg:pt-16 py-10 w-full bg-[#937767] flex flex-col items-center justify-center">
      <div>
        <h1 className="text-white text-2xl font-light font-canelaThin">
          Certified by
        </h1>
      </div>
      <div className="w-full flex flex-wrap items-center justify-center lg:gap-24 gap-8">
        <Image
          alt="img"
          width={0}
          height={0}
          className="w-20 h-20 lg:w-48 lg:h-36"
          src={'/assets/certify/c1.svg'}
        />
        <Image
          alt="img"
          width={0}
          height={0}
          className="w-20 h-20 lg:w-48 lg:h-36"
          src={'/assets/certify/c2.svg'}
        />
        <Image
          alt="img"
          width={0}
          height={0}
          className="w-20 h-20 lg:w-48 lg:h-36"
          src={'/assets/certify/c3.svg'}
        />
      </div>
    </div>
  )
}

export default Certify
