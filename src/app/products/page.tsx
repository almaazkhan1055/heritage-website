import CollectionComponent from '@/components/CollectionComponent'
import NudgeBanner from '@/components/NudgeBanner'
import PageTitle from '@/components/PageTitle'
import Image from 'next/image'
import React from 'react'

import fs from 'fs'
import ProductCard from '@/components/homepage/products/ProductCard'

const Products = () => {
  const products = JSON.parse(
    fs.readFileSync('public/content/products.json', 'utf8')
  ) as ProductType[]

  return (
    <main>
      <PageTitle title="PRODUCTS" img="/assets/products-page/bg2.jpg" />

      <div className="flex justify-center px-4">
        <div className="max-w-screen-xl w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-24">
          {products.map((item, index) => (
            <ProductCard
              key={index}
              product={item}
            />
          ))}
        </div>
      </div>

      <NudgeBanner
        title="liked what you saw"
        label="Contact Us"
        route="/contact"
      />
    </main>
  )
}

export default Products
