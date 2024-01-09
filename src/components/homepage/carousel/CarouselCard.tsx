import Image from 'next/image'
import React, { FC } from 'react'

interface carouselCardProps {
  image: string
}

const CarouselCard: FC<carouselCardProps> = ({ image }) => {
  return (
    <div className={`lg:w-full  md:w-full w-[240px] h-[380px]`}>
      <Image
        alt="img"
        src={image}
        width={240}
        height={380}
        className="w-full h-full object-cover"
      />
    </div>
  )
}

export default CarouselCard
