import React from 'react'
import PageTitle from '../PageTitle'
import CategoryCard from './CategoryCard'
import NudgeBanner from '../NudgeBanner'

const ProductCategory = () => {
  return (
    <div>
      <PageTitle title='DRAWER KNOBS' img='/assets/product-category/bg.jpg'/>
      <div className='max-w-screen-xl flex-wrap lg:justify-start justify-center flex items-start gap-x-4 gap-y-10 my-10 min-h-screen mx-auto'>
        <CategoryCard label='Pearl Luxe' img='/assets/product-category/cat1.png'/>
        <CategoryCard label='Diamond Glow' img='/assets/product-category/cat2.png'/>
      </div>
      <NudgeBanner label='Contact Us' title='liked what you saw?' route='/contact'/>
    </div>
  )
}

export default ProductCategory
