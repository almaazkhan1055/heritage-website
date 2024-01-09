import React, { FC } from 'react'
import Image from 'next/image'

interface PageTitleProps {
  title: string
  img: string
}

const PageTitle: FC<PageTitleProps> = ({ title, img }) => {
  return (
    <div className="w-full   flex items-center justify-center relative ">
      <div className="w-full overflow-hidden -z-10 lg:h-[60vh] h-screen absolute bottom-0  ">
        <Image
          alt="img"
          src={img}
          className=" w-full h-full object-cover "
          width={1440}
          height={400}
          quality={100}
        />
        <div className="w-full absolute top-0  h-full  bg-gradient-to-b from-transparent via-transparent to-[#0000005c]  "></div>
      </div>
      <div className="lg:w-[80%] w-full my-28 flex flex-col items-center gap-10 justify-center">
        <h1 className="lg:text-8xl md:text-7xl text-center  text-5xl  text-white font-canelaThin">
          {title}
        </h1>
      </div>
    </div>
  )
}

export default PageTitle
