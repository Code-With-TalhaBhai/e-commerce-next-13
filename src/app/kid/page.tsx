import React from 'react'
import {Products} from '@./../typings.d';
import Image from 'next/image';

type Props = {}
export const kids : Products[] = [
  {title:'Shalwar-Kameez',image:'/kid1.webp',tag:'T Shirts',price:34,category:'kids'},
  {title:'Kurta-Shalwaar',image:'/kid2.webp',tag:'Jackets',price:418,category:'kids'},
  {title:'Plain t-Shirt',image:'/kid3.webp',tag:'Sweater',price:634,category:'kids'},
  {title:'Summer Sweatshirt',image:'/kid4.webp',tag:'Sweater',price:162,category:'kids'},
  {title:'Summer Frogg',image:'/kid5.webp',tag:'Sweater',price:752,category:'kids'},
  {title:'Yellow Frogg',image:'/kid6.webp',tag:'Sweater',price:863,category:'kids'},
  {title:'New Swangg',image:'/kid7.webp',tag:'Sweater',price:235,category:'kids'},
  {title:'New Kurta',image:'/kid8.webp',tag:'Sweater',price:785,category:'kids'},
];

export default function Page({}: Props) {


  return (
    <div>
        <div className='m-32 flex flex-wrap gap-7 justify-between'>
          {
          kids.map(
            (element:Products,index:number)=>(
            <div className='flex flex-col gap-2 py-8'>
              <Image width={280} height={280} src={element.image} alt="Loading..."/>
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