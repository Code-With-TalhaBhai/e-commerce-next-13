'use client';
import React from 'react'
import Banner from '@/components/ui/Banner/Banner'
import Promotion from '@/components/ui/Promotions/Promotion'
import Product from '@/components/ui/Product/Product'
import Gallery from '@/components/ui/Gallery/Gallery'
import Subscribe from '@/components/ui/Subscribe/Subscribe'

type Props = {}

const Main = (props: Props) => {
  return (
    <div>
        <Banner/>
        <Promotion/>
        <Product/>
        <Gallery/>
        <Subscribe/>
    </div>
  )
}

export default Main