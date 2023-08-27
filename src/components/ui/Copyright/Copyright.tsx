'use client';
import React from 'react'
import Link from 'next/link';

type Props = {}

const Copyright = (props: Props) => {
  return (
    <div className='text-lg flex m-auto w-[80%] justify-between'>
       <p> Copyright © 2022 Dine Market </p>
       <div className='flex'>
        <p>Design by: </p>
        <p className='font-extrabold'>Talha Full Stack Engineer</p>
       </div>
       <div className='flex'>
        <p>Code by: </p>
        <Link className='font-extrabold' href="/https://github.com/Code-With-TalhaBhai">Talha</Link>
       </div>
    </div>
  )
}

export default Copyright