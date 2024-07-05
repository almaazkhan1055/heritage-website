import React from 'react'
import CollectionComponent from '@/components/ui/CollectionComponent'
import Image from 'next/image'
import NudgeBanner from '@/components/ui/NudgeBanner'
import Certify from '@/app/(HomePage)/sections/Certify'
import PageTitle from '@/components/ui/PageTitle'
import fs from 'fs'
import Banner from '@/app/(HomePage)/sections/Banner'
import GenericBanner from '@/components/ui/GenericBanner'
import CSR from '@/app/csr/sections/CSR'
import Hero from '@/app/about/sections/Hero'
import Family from '@/app/about/sections/Family'
import Legacy from '@/app/about/sections/Legacy'
import TraditionsTrends from '@/app/about/sections/TraditionsTrends'
import Manufacturing from '@/app/about/sections/Manufacturing'

const About = () => {
  const data = JSON.parse(fs.readFileSync('public/content/about.json', 'utf8'))

  const year = new Date().getFullYear()

  return (
    <main>

      <Hero />
      <Certify />

      <div className="w-full px-3 lg:px-0 flex flex-col items-center justify-center gap-16 md:gap-48 lg:gap-56 my-24 lg:mt-56">

      <Legacy />
      <Manufacturing />
      <TraditionsTrends />      
      </div>
      <Family />


      <NudgeBanner
        title="liked what you saw"
        label="Contact Us"
        route="/contact"
      />
    </main>
  )
}

export default About
