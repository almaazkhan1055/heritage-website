import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface CollectionComponentProps {
  title: string
  image: string
  desc: string
  variant: 'left' | 'right'
}

const CollectionComponent: FC<CollectionComponentProps> = ({
  title,
  image,
  desc,
  variant,
}) => {
  const containerStyles = `w-full lg:h-[60vh] md:h-[60vh]  py-3 ${
    variant === 'right' ? 'bg-[#F0F1F3]' : 'bg-[#937767]'
  } `
  const imageContainerStyles =
    'lg:w-[50%]  md:w-[50%] w-full lg:h-full md:h-full h-[30%] px-3'
  const textContainerStyles = `lg:w-[50%] md:w-[50%]  w-full px-3 lg:h-full flex lg:flex-row md:flex-row flex-col items-start relative ${
    variant === 'right' ? 'lg:justify-end' : 'lg:justify-center'
  } `
  const imageStyles = `lg:h-full md:h-full h-64 md:w-auto w-full object-cover lg:rounded-none rounded-lg  lg:w-auto lg:absolute md:absolute ${
    variant === 'right' ? 'left-0' : 'right-0'
  }  bottom-20`
  const titleContainerStyles = `z-10 lg:w-[400px] md:w-full w-full flex items-end   md:justify-end justify-start py-2 lg:text-left`

  return (
    <div className={containerStyles}>
      <div
        className={`max-w-screen-xl h-full flex ${
          variant === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse'
        }    md:flex-row flex-col-reverse mx-auto`}
      >
        <div className={imageContainerStyles}>
          <div className="w-full h-full flex flex-col lg:p-5 p-0 items-start gap-4 justify-center">
            <p
              className={`${
                variant === 'right' ? 'text-[#937767]' : 'text-white'
              }`}
            >
              {desc}
            </p>
   
          </div>
        </div>
        <div className={textContainerStyles}>
          <Image
            alt="img"
            src={image}
            width={200}
            height={300}
            className={imageStyles}
          />
          <div className={titleContainerStyles}>
            <h1
              className={`lg:text-7xl md:text-5xl text-2xl ${
                variant === 'right' ? 'text-[#5D4B41]' : 'text-white'
              }  font-canelaMedium lg:font-canelaThin`}
            >
              {title}
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CollectionComponent
