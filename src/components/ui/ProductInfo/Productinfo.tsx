'use client';
import React from 'react'

type Props = {}

export default function Productinfo(props: Props){
  return (
   <div>
      <div className='border-b-2 border-b-gray-400 p-8'>
        <p className='font-bold tracking-wide text-3xl'>Product Information</p>
      </div>

      <div className='mt-12 flex flex-col gap-10'>
        <div className='flex items-center space-between gap-28 w-[100%]'>
          <p className='w-[100%] uppercase text-gray-500 font-bold text-xl'>Product Details</p>
          <p className='text-lg tracking-wider font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div className='flex items-center space-between gap-28 w-[100%]'>
          <p className='w-[25%] uppercase text-gray-500 font-bold text-xl'>Product Care</p>
          <ul className='text-lg tracking-wider font-medium'>
            <li className='py-4'>&#9679;  Lorem ipsum dolor sit amet</li>
            <li>&#9679;  consectetur adipiscing elit</li>
          </ul>
        </div>
        </div>
        
    </div>
  )
}