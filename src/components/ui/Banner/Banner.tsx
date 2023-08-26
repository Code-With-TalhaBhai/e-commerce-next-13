'use client';
import React from 'react'
import {Button} from '@/components/ui/button';
import bazaar from '@/../public/bazaar.webp';
import bustle from '@/../public/bustle.webp';
import versace from '@/../public/versace.webp';
import inStyle from '@/../public/Featured4.webp';
import banner from '@/../public/banner.webp';
import Image from 'next/image';


type Props = {}

const Banner = (props: Props) => {
  return (
    <div className='my-12 py-4 w-full h-[604px] flex items-center justify-center'>
        {/* Left Section Sale */}

        <div className='flex-1 h-full flex flex-col justify-between'>
        <div className='pt-16'>
            <div>
            <Button className='bg-blue-100 text-blue-600 font-bold text-lg'>Sale 70%</Button>
            </div>
            <div className=''>
            <p className='text-6xl my-6 font-bold'>An Industrial Take on Streetwear</p>
            </div>
            <div className='my-10'>
            <p className='text-gray-600 pr-64'>Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
            </div>

            <div className='text-white font-bold bg-black w-[35%] h-16 flex items-center justify-center gap-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg> 
            <p>Start Shopping</p>
            </div>
        </div>

            {/* Brand-Image */}
            <div className='flex items-center justify-between'>
                <Image width={92} height={30} src={bazaar} alt="" />
                <Image width={92} height={30} src={bustle} alt="" />
                <Image width={92} height={30} src={versace} alt="" />
                <Image width={92} height={30} src={inStyle} alt="" />
            </div>
        </div>



        {/* Right Section Image */}
        <div className='flex-1 border-blue-600'>
            <div className='w-[600px] h-[600px] relative bg-[#ffece3] rounded-full'>
                <Image width={650} height={650} className='w-[650px] h-[650px] absolute -top-6 left-6' src={banner} alt="" />
            </div>
        </div>
        
    </div>
  )
}

export default Banner