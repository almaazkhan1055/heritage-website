import Image from 'next/image'
import FlagComponent from '@/components/homepage/FlagComponent'
import Offer from '@/components/homepage/Offer'
import Hero from '@/components/homepage/Hero'
import Banner from '@/components/homepage/Banner'
import NudgeBanner from '@/components/NudgeBanner'
import Carousel from '@/components/homepage/carousel/Carousel'
import Products from '@/components/homepage/products/Products'
import Certify from '@/components/homepage/Certify'
import Star from '@/components/homepage/Star'
import fs from 'fs'


export default function Home() {
  const products = JSON.parse(fs.readFileSync('public/content/products.json', 'utf8')) as {name: string, image: string}[];

  return (
    
    <div className="w-full flex-col overflow-hidden items-center">
      <Hero />
      <Carousel />
      <Star />
      <FlagComponent />
      <Offer />
      <Certify />
      <Banner />
      <Products products={products} />
      <NudgeBanner title="Liked what you saw?" label="Contact Us" route='/contact' />
    </div>
  )
}
