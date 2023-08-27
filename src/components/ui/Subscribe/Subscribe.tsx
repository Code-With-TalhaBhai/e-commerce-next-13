"use client"
import React from 'react'

type Props = {}

const Subscribe = (props: Props) => {
  return (
    <div className='relative h-96 border flex items-center justify-center text-center z-[1]'>
        <div className='opacity-10 -z-[1] font-black text-9xl absolute'>
            Newsletter
        </div>

        <div>
            <p className='font-bold text-5xl'>Subscribe Our Newsletter</p>
            <p className='font-medium text-lg py-6'>Get the latest information and promo offers directly</p>
            <div className='w-[80%] box-border flex justify-between'>
                <input type="text" className='border border-black h-9 w-[70%] focus:outline-none' placeholder='Input email address'/>
                <button className='text-sm text-white font-bold bg-black w-[25%] h-9'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Subscribe