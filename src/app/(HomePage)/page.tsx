import FlagComponent from '@/app/(HomePage)/sections/FlagComponent'
import Offer from '@/app/(HomePage)/sections/Offer'
import Hero from '@/app/(HomePage)/sections/Hero'
import Banner from '@/app/(HomePage)/sections/Banner'
import NudgeBanner from '@/components/ui/NudgeBanner'
import Carousel from '@/app/(HomePage)/sections/carousel/Carousel'
import Products from '@/app/(HomePage)/sections/products/Products'
import Certify from '@/app/(HomePage)/sections/Certify'
import Star from '@/app/(HomePage)/sections/Star'
import fs from 'fs'

export default function Home() {
  const products = JSON.parse(
    fs.readFileSync('public/content/products.json', 'utf8')
  ) as { name: string; image: string }[]

  return (
    <div className="w-full flex-col overflow-hidden items-center">
      <Hero />
      <Carousel />
      {/* <Star /> */}
      <FlagComponent />
      <Offer />
      <Certify />
      <Banner />
      <Products products={products} />
      <NudgeBanner
        title="Liked what you saw?"
        label="Contact Us"
        route="/contact"
      />
    </div>
  )
}
