'use client'
import { Logo } from '@/icons'
import { Button } from '@/components'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
const Navbar = () => {
  const pathname = usePathname()

  const [path, setPath] = useState(false)
  const [show, setShow] = useState(false)

  useState(() => {
    if (pathname === '/') {
      setPath(true)
    }
  })
  return (
    <div className="w-full z-50 h-fit flex justify-center lg:px-[4rem] px-3 font-canela  text-primary bg-[#FFF] border-b border-[#B39E92]">
      <div className=" hidden lg:flex w-full h-[7.5rem] justify-between items-center ">
        <Link href={'/'}>
          <div className="flex items-center gap-4 justify-start">
            <Image
              alt="img"
              src={'/logo.svg'}
              width={0}
              height={0}
              className="w-10"
            />
            <h1 className="font-canela text-2xl ">Heritage India Exports</h1>
          </div>
        </Link>
        <div className="flex gap-10">
          <Link href={'/about'}>
            <p className="hover:text-[#937767] ">About Us</p>
          </Link>
          <Link href={'/products'}>
            <p className="hover:text-[#937767] ">Products</p>
          </Link>

          <Link href={'/csr'}>
            <p className="hover:text-[#937767] ">CSR</p>
          </Link>
          <Link href={'/contact'}>
            <p className="hover:text-[#937767] ">Contact Us</p>
          </Link>
        </div>
      </div>

      {path ? (
        <div className="lg:hidden relative  flex w-full h-[5rem] justify-between items-center border-b border-light">
          <Link href={'/'}>
            <Logo width={'44'} height={'44'} />
          </Link>

          <Image
            alt="img"
            width={200}
            height={200}
            src={'/b-menu.svg'}
            className="w-8 "
            onClick={() => {
              setShow(!show)
            }}
          />
          <div
            className={`${
              show ? 'flex' : 'hidden'
            }  flex-col  w-full  bg-white z-50 top-20   h-64 absolute justify-center gap-6 items-center border-t border-b border-[#B39E92]`}
          >
            <Link href={'/about'}>
              <p className="hover:text-[#937767] ">About Us</p>
            </Link>
            <Link href={'/products'}>
              <p className="hover:text-[#937767] ">Products</p>
            </Link>

            <Link href={'/careers'}>
              <p className="hover:text-[#937767] ">CSR</p>
            </Link>
            <Link href={'/contact'}>
              <p className="hover:text-[#937767] ">Contact Us</p>
            </Link>
          </div>
        </div>
      ) : (
        <div className="lg:hidden  flex w-full h-[5rem] justify-between items-center border-b border-white">
          <Link href={'/'}>
            <Image
              alt="img"
              width={200}
              height={200}
              src={'/logo.svg'}
              className="w-12"
            />
          </Link>
          <Image
            alt="img"
            width={200}
            height={200}
            src={'/menu.svg'}
            className="w-8"
            onClick={() => {
              setShow(!show)
            }}
          />
          <div
            className={`${
              show ? 'flex' : 'hidden'
            }  flex-col  w-full  bg-white z-50 top-20 left-0 right-0 h-64 absolute justify-center gap-6 items-center border-b border-[#B39E92]`}
          >
            <Link href={'/about'}>
              <p className="hover:text-[#937767] ">About Us</p>
            </Link>
            <Link href={'/products'}>
              <p className="hover:text-[#937767] ">Products</p>
            </Link>

            <Link href={'/careers'}>
              <p className="hover:text-[#937767] ">CSR</p>
            </Link>
            <Link href={'/contact'}>
              <p className="hover:text-[#937767] ">Contact Us</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
