import Link from 'next/link'
import React, { FC } from 'react'

interface ButtonProps {
  label: string
  color: 'white' | 'primary',
  route:string
}

const Button: FC<ButtonProps> = ({ label, color,route }) => {
  return (
    <Link href={`${route}`}>
   <div
      className={` ${
        color === 'primary'
          ? ` text-white bg-primary transition-all duration-200 hover:bg-[#937767]`
          : `border-primary  border bg-white transition-all duration-200 hover:bg-[#937767] hover:text-white hover:border-white text-primary`
      } flex items-center cursor-pointer overflow-hidden relative justify-center font-semibold font-canela w-48 h-16`}
    >
      {label}
    </div> </Link>
  )
}

export default Button
