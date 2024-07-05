import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  return (
    <div className='flex justify-center items-center min-h-[calc(100vh-7.5rem)] py-4 px-4 md:px-0'>
      <div className="flex flex-col justify-center items-center max-w-3xl gap-4">
        <Image
          className="h-56 w-56 md:h-72 md:w-72 object-fill"
          src="/content/csr/heroL.png"
          width={500}
          height={500}
          alt=""
        />
        <h1 className="tracking-tight text-primary text-4xl font-canela text-center">
          Our commitment to CSR
        </h1>
        <p className="font-vietnam text-secondary text-center">
          At Heritage, we are deeply committed to making a positive impact on
          society and the environment. In line with our values and
          responsibility towards the community, we pledge to allocate at least
          2% of our Pre-Tax profits to our Corporate Social Responsibility (CSR)
          programs. This commitment underscores our dedication to sustainable
          development, community engagement, and enhancing the quality of life
          for people around us.
        </p>
      </div>
    </div>
  )
}
