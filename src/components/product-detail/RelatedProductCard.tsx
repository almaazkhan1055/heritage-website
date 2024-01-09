import Image from 'next/image'
import React, { FC } from 'react'
import Link from 'next/link'

interface CardProps{
  img:string,
  label:string
}

const RelatedProductCard:FC<CardProps> = ({img,label}) => {
  return (
    <Link href={'/products/product-detail'}>
    <div className='lg:w-56 lg:h-56 w-full md:w-56 md:h-56 relative'>
      <Image alt='' src={img} width={500} height={500} quality={100} className='w-full h-full object-cover'/>
      <div className='w-full h-full bg-gradient-to-b from-transparent to-[#0000007c] hover:bg-gradient-to-b hover:from-transparent hover:to-[#0000009c] cursor-pointer transition-all duration-200 flex items-end p-3 text-white font-canela text-lg justify-center top-0 absolute'>
        <p>{label}</p>
      </div>
    </div></Link>
  )
}

export default RelatedProductCard
