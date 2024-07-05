import React, { FC } from 'react'
import Image from 'next/image'

interface PageTitleProps {
  title: string
  img: string
}

const PageTitle: FC<PageTitleProps> = ({ title, img }) => {
  return (
    <div className="w-full flex items-center justify-center relative ">
      <div className="lg:w-[80%] w-full my-20 flex flex-col items-center gap-10 justify-center">
        <h1 className="lg:text-8xl md:text-7xl text-center text-5xl  font-canelaThin text-primary">
          {title}
        </h1>
      </div>
    </div>
  )
}

export default PageTitle
