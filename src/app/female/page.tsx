import React from 'react'
import {Products} from '@./../typings.d';
import Image from 'next/image';

type Props = {}

export const female : Products[] = [
  {title:'Muscle Tank',image:'/p1.png',tag:'T Shirts',price:134,category:'female'},
  {title:'Brushed Bomber',image:'/p2.png',tag:'Jackets',price:418,category:'female'},
  {title:'Brushed Raglan Sweatshirt',image:'/p3.png',tag:'Sweater',price:312,category:'female'},
  {title:'Cameryn Sash Tie Dress',image:'/p4.webp',tag:'Dress',price:54,category:'female'},
  {title:'Imperial Alpaca Hoodie',image:'/gal1.webp',tag:'Jackets',price:64,category:'female'},
  {title:'Flex Sweatshrit',image:'/fam4.webp',tag:'Sweater',price:164,category:'female'},
  {title:'Flex Sweatpants',image:'/fam2.webp',tag:'Pants',price:164,category:'female'},
  {title:'Pink Fleece Sweatpants',image:'/fam3.webp',tag:'Pants',price:674,category:'female'},
  {title:'Lite Sweatpants',image:'/fam1.webp',tag:'Pants',price:7254,category:'female'},
];
export default function Page({}: Props) {


  return (
    <div>
        <div className='m-32 flex flex-wrap gap-14'>
          {
          female.map(
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