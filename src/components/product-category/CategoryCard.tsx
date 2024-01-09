import Image from 'next/image'
import React, { FC } from 'react'

interface cardProps{
    img:string,
    label:string
}

const CategoryCard:FC<cardProps> = ({img,label}) => {
  return (
    <div className='flex flex-col items-start justify-center'>
      <div className='lg:w-64 w-72 h-96 bg-[#F0F1F3] flex items-center justify-center'>
        <Image alt='img' width={500} height={500} quality={100} src={img} className='w-full h-auto object-cover'/>
      </div>
      <div>
        <p className='text-[#937767] text-lg '>{label}</p>
      </div>
    </div>
  )
}

export default CategoryCard
