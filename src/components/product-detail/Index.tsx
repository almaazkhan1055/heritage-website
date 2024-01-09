import React from 'react'
import ImgCarousel from './ImgCarousel'
import { Button } from '..'
import RelatedProductCard from './RelatedProductCard'
import NudgeBanner from '../NudgeBanner'
import fs from 'fs'
import ProductCard from '../homepage/products/ProductCard'
const ProductDetail = ({ slug }: { slug: string }) => {
  const products = JSON.parse(
    fs.readFileSync('public/content/products.json', 'utf8')
  ) as ProductType[]

  const allProducts = products.filter((product) => product.slug !== slug)

  const relatedProducts = allProducts
    .sort(() => Math.random() - Math.random())
    .slice(0, 4)

  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <h1 className="lg:text-4xl md:text-4xl text-2xl w-full font-canela text-primary">
          Other Products
        </h1>
      </div>
      <div className="flex justify-center px-4">
        <div className="max-w-screen-xl w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-12">
          {relatedProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center px-4">
        <div className="lg:w-[80%] w-full  flex items-center justify-start">
          <div className="flex w-full flex-col items-start justify-center gap-5"></div>
        </div>
        <div className="lg:w-[80%] w-full">
          <NudgeBanner
            label="Contact Us"
            title="Have a Custom design in Mind?"
            route="/contact"
          />
        </div>
      </div>
    </>
  )
}

export default ProductDetail
