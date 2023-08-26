import Image from 'next/image';
import React from 'react'


type Props = {}

const Gallery = (props: Props) => {
    const gallery = [
        {name:'Using Good Quality Materials',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit'},
        {name:'100% Handmade Products',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit'},
        {name:'Modern Fashion Design',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit'},
        {name:'Discount for Bulk Orders',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit'},
    ];
  return (
    <div className='my-52 bg-white grid grid-cols-2'>
        <div className='my-10 text-right col-span-2 tracking-wide font-bold text-4xl'>
                <p className='py-3'>Unique and Authentic Vintage</p>
                <p className=''>Designer Jewellery</p>
        </div>
        <div className='bg-[#FBFCFF] inline-grid grid-cols-2 col-span-2'>
            <div className='px-18 flex flex-wrap justify-between'>
                {gallery.map((element:any)=>
                <div className='w-[35%] py-10 flex flex-col'>
                    <p className='font-extrabold py-1 text-xl'>{element.name}</p>
                    <p className='text-lg'>{element.description}</p>
                </div>
                )}
            </div>
            <div className='flex items-center justify-between gap-6'>
                    {/* Image */}
                <div>
                    <Image width={1000} height={200} src="/gal1.webp" alt=""/>
                </div>
                {/* Description */}
                <div>
                    <p className='font-medium my-5 leading-6 text-lg'>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
                    <div className='text-sm text-white font-bold bg-black w-[55%] h-10 flex items-center justify-center'>See All Products</div>
                </div>
            </div>
        </div>
        {/* <div>ghq</div> */}
    </div>
  )
}

export default Gallery