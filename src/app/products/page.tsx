import React from 'react'
import {Products} from '@./../typings.d';
import Image from 'next/image';
import { male } from '@/app/male/page';
import { female } from '@/app/female/page';
import { kids } from '@/app/kid/page';

type Props = {}

export const all : Products[] = [...male,...female,...kids];

export default function Page({}: Props) {


  return (
    <div>
        <div className='m-32 flex flex-wrap gap-14'>
          {
          all.map(
            (element:Products,index:number)=>(
            <div className='flex flex-col cursor-pointer gap-2 py-8'>
              <Image width={280} height={280} className='' src={element.image} alt="Loading..."/>
              <p className='text-lg font-medium'>{element.title}</p>
              <p className='text-gray-600 font-medium'>{element.tag}</p>
              <p className='text-xl font-semibold'>$ {element.price}</p>
            </div>
            )
          )
          }
        </div>
    </div>
  )
}