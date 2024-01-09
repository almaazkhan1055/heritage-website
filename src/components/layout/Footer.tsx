import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {

  const year = new Date().getFullYear()
  return (
    <div className="w-full h-[40vh] lg:mt-28 mt-20  bg-[#5D4B41]">
      <div className="w-full h-[70%] p-5 lg:p-0 max-w-screen-xl mx-auto flex lg:flex-row flex-col items-center justify-center lg:justify-between">
        <div className="flex flex-col gap-5 h-24  items-start justify-end">
          <div className="flex items-center gap-2 justify-start">
            <Image
              alt="img"
              src={'/logo.svg'}
              width={0}
              height={0}
              className="w-8"
            />
            <h1 className="font-canela text-xl text-white">
              Heritage India Exports
            </h1>
          </div>
          <p className="text-white text-sm">
            Crafting a legacy. One design at a time.
          </p>
        </div>
        <div className="flex items-end h-24  justify-end">
          <ul className="flex gap-3 items-center justify-end text-[#F5EFCF] text-sm  font-semibold">
            <Link href={'/products'}><li className='hover:text-white transition-all duration-150'>Products</li></Link>
            <Link href={'/about'}><li className='hover:text-white transition-all duration-150'>About us</li></Link>
            <Link href={'/csr'}><li className='hover:text-white transition-all duration-150'>CSR</li></Link>
            <Link href={'/contact'}><li className='hover:text-white transition-all duration-150'>Contact Us</li></Link>
       
          </ul>
        </div>
      </div>
      <div className="w-full mx-auto h-[30%] text-[#F5EFCF] bg-[#2A221D]">
        <div className="max-w-screen-xl  text-sm flex mx-auto h-full items-center justify-center lg:justify-start">
          <p>© {year} Heritage India Exports. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
