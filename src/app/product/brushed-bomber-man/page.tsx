import React from 'react'
import Image from 'next/image'
import b1 from '@/../public/brush1.jpeg';
import b2 from '@/../public/brush2.jpeg';
import b3 from '@/../public/man3.webp';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

type Props = {}

export default function page({}: Props) {
  return (
    <div>
        <div className='flex gap-16'>
            {/* small images */}
            <div className='flex flex-col gap-6'>
                <Image width={120} height={120} src={b1} alt="...Loading"/>
                <Image width={120} height={120} src={b2} alt="...Loading"/>
            </div>
            {/* large image */}
            <div className='w-[850px]'>
              <Image className='w-full' src={b3} alt="...Loading"/>
            </div>
            {/* order */}
            <div className='flex flex-col gap-8 px-4 py-32'>
              <div className='text-2xl font-medium'>
              <p className='text-3xl tracking-wider'>Brushed Bomber</p>
              <p className='text-gray-300'>Jacket</p>
              </div>

              <div>
              <p className='uppercase py-4 font-semibold tracking-wide'>Select Size</p>
              <div className='flex text-2xl font-semibold gap-6 text-gray-600'>
                <p>XS</p>
                <p>S</p>
                <p>M</p>
                <p>L</p>
                <p>XL</p>
              </div>
              </div>

              <div className='flex gap-5'>
              <p className='font-bold text-xl'>Quantity: </p>
              <div className='flex font-medium text-xl gap-4 items-center justify-center'>
                <p className='px-4 py-2 bg-gray-300 rounded-full'>-</p>
                <p>1</p>
                <p className='px-4 py-2 bg-gray-300 rounded-full'>+</p>
              </div>
              </div>

              <div className='flex items-center gap-4'>
                 <Button className='flex gap-8 text-xl p-6 bg-black rounded-none'>
                  <ShoppingCart/>
                  <p>Add To Cart</p>
                 </Button>
                <p className='text-3xl font-bold'>$ 533.34</p>
              </div>

            </div>
        </div>
    </div>
  )
}
