import React, { FC } from 'react'
import { Button } from '.'
import Image from 'next/image'

interface NudgeBannerProps {
  title: string
  label: string,
  route:string
}

const NudgeBanner: FC<NudgeBannerProps> = ({ title, label,route }) => {
  return (
    <div className="max-w-screen-xl lg:mt-36 mt-20 lg:h-96 h-72 bg-[#937767] mx-auto  flex relative overflow-hidden flex-col items-center justify-center">
      <div className="flex z-40 flex-col items-center lg:gap-12 gap-8 justify-center">
        <h1 className="text-white font-canelaThin z-10 text-center font-thin lg:text-5xl md:text-5xl text-4xl">
          {title}
        </h1>
        <Button label={label} color="white" route={route} />
      </div>
      <Image
        alt=""
        src={'/assets/banner/nudge.svg'}
        width={0}
        height={0}
        className="w-full  absolute opacity-70 h-full object-cover"
      />
    </div>
  )
}

export default NudgeBanner
