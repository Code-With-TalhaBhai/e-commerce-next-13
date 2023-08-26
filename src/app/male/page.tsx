import React from 'react'
import {Products} from '@./../typings.d';
import Image from 'next/image';

type Props = {}
export const male : Products[] = [
  {title:'Flex Push Button Bomber',image:'/man4.webp',tag:'T Shirts',price:34,category:'male'},
  {title:'Brushed Bomber',image:'/man1.webp',tag:'Jackets',price:418,category:'male'},
  {title:'Plain t-Shirt',image:'/man2.webp',tag:'Sweater',price:124,category:'male'},
  {title:'Summer Sweatshirt',image:'/man3.webp',tag:'Sweater',price:543,category:'male'},
  {title:'New Swangg',image:'/man5.webp',tag:'Sweater',price:75,category:'male'},
  
];

export default function Page({}: Props) {


  return (
    <div>
        <div className='m-32 flex flex-wrap gap-14'>
          {
          male.map(
            (element:Products,index:number)=>(
            <div className='flex flex-col cursor-pointer gap-2 py-8'>
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