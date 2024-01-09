import React from 'react'
import Image from 'next/image'
import NudgeBanner from '@/components/NudgeBanner'
import PageTitle from '@/components/PageTitle'
import CSR from '@/components/CSR'

const Career = () => {
  return (
    <main>
      <PageTitle title="CSR" img="/assets/careers/bg.jpg" />

      <CSR />
      <NudgeBanner title="explore our craft" label="Explore" route='/products' />
    </main>
  )
}

export default Career
