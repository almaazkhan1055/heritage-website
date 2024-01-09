import React from 'react'
import CollectionComponent from '@/components/CollectionComponent'
import Image from 'next/image'
import NudgeBanner from '@/components/NudgeBanner'
import Certify from '@/components/homepage/Certify'
import PageTitle from '@/components/PageTitle'
import fs from 'fs'
import Banner from '@/components/homepage/Banner'
import GenericBanner from '@/components/homepage/GenericBanner'
import CSR from '@/components/CSR'

const About = () => {
  const data = JSON.parse(fs.readFileSync('public/content/about.json', 'utf8'))

  return (
    <main>
      <PageTitle title="ABOUT US" img="/assets/about-page/bg.jpg" />

      <div className="w-full bg-secondary px-4 flex items-center flex-wrap lg:gap-16 md:gap-16 gap-8 py-16 mb-32 font-canelaThin text-white justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="lg:text-5xl md:text-5xl text-3xl">500,000+</h1>
          <p className="lg:text-xl md:text-xl text-lg">Unique SKUs</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="lg:text-5xl md:text-5xl text-3xl">50+</h1>
          <p className="lg:text-xl md:text-xl text-lg">Countries Serviced</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="lg:text-5xl md:text-5xl text-3xl">100%</h1>
          <p className="lg:text-xl md:text-xl text-lg">Carbon Neutral by 2025</p>
        </div>
      </div>
      <Certify />

      <div className="w-full px-3 lg:px-0 flex flex-col items-center justify-center gap-16 md:gap-48 lg:gap-56 my-24 lg:my-56">
        {data.map((content: any, i: number) => {
          if (content.style === 'default') {
            return (
              <CollectionComponent
                title={content?.title}
                desc={content?.content}
                image={'content/about/' + content?.image}
                variant={content?.imageStyle}
                key={i}
              />
            )
          }

          if (content.style === 'banner') {
            return (
              <GenericBanner
                leftTitle={content?.leftTitle}
                rightTitle={content?.rightTitle}
                image={'content/about/' + content?.image}
                content={
                  <p className="w-[50%] lg:text-lg md:text-lg text-sm font-canelaThin font-extralight text-white lg:text-white">
                  {content?.content}
                  </p>
                }
                key={i}
              />
            )
          }
        })}
      </div>
      <NudgeBanner
        title="liked what you saw"
        label="Contact Us"
        route="/contact"
      />
    </main>
  )
}

export default About
