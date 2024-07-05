import Image from 'next/image'
import React from 'react'
import { Button } from '..'
import Link from 'next/link'

// left title, right title are strings, content is a string or a react component
const GenericBanner = ({leftTitle, rightTitle, image, content}: {leftTitle: string, rightTitle: string, image: string, content: string}) => {
  return (
    <div className="mb-28 relative overflow-hidden w-full h-[70vh] lg:h-[75vh]">
      <Image
        alt=""
        src={image}
        quality={100}
        priority={true}
        width={1000}
        height={1000}
        className="w-full -z-10 absolute h-full object-cover"
      />
      <div className="px-6 flex flex-col mx-auto  h-full">
        <div className="w-full h-[50%] flex lg:flex-col flex-col items-start lg:p-16 p-0 justify-center gap-y-5 lg:justify-between">
          <h1 className="lg:text-6xl md:text-6xl text-4xl font-canelaThin font-thin text-white">
            {leftTitle}
          </h1>
          <p className="w-[50%] lg:text-lg md:text-lg text-sm font-canelaThin font-extralight text-white lg:text-white">

          {content}
          </p>
        </div>
        <div className="w-full h-[50%] flex lg:flex-col flex-col items-end lg:p-16 p-0 justify-center gap-y-5 lg:justify-end text-right">
          <h1 className="lg:text-6xl md:text-6xl text-4xl font-canelaThin font-thin text-white">
            {rightTitle}
          </h1>

        </div>
      </div>
    </div>
  )
}

export default GenericBanner
