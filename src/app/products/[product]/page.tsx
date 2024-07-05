import { Button } from '@/components'
import CollectionComponent from '@/components/ui/CollectionComponent'
import ProductDetail from '@/components/product-detail/Index'
import React from 'react'
import fs from 'fs'
import ProductComponent from '@/components/ProductComponent'

const Page = ({params}: {params: any}) => {

  const products = JSON.parse(
    fs.readFileSync('public/content/products.json', 'utf8')
  ) as ProductType[]

  const productDetail = products.find(
    (product) => product.slug === params.product
  )

  if (!productDetail) {
    return <div>Not found</div>
  }

  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center px-4 mt-12">
        <div className="lg:w-[80%] w-full flex flex-col gap-3 mt-8 items-start justify-center mb-12">
          <h1 className="font-canela lg:text-6xl md:text-4xl text-2xl text-[#5D4B41]">
            {productDetail.name}
          </h1>
          <p className="text-[#937767]">
            {productDetail.description}
          </p>
          <Button label="Send Inquiry" color="primary" route="/contact" />
        </div>
      </div>

      <div className="w-full px-3 lg:px-0 flex flex-col items-center justify-center gap-16 md:gap-48 lg:gap-56  my-24">
        
        {
          productDetail.content.map((item, index) => (
          
            <ProductComponent 
              key={index}
              title={item.title}
              desc={item.description}
              image={`/content/products/${item.image}`}
              variant={index % 2 === 0 ? 'right' : 'left'}
            />
          
            ))
        }
        
     
      </div>
      <ProductDetail slug={productDetail.slug} />
    </div>
  )
}

export const generateStaticParams = async () => {
  const products = JSON.parse(
    fs.readFileSync('public/content/products.json', 'utf8')
  ) as ProductType[]

  return products.map((product) => ({
    product: product.slug,

  }))
}

export default Page
