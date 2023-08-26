import Image from "next/image"
import React from "react"

type Props = {}

interface product {
  name: string
  price: number
  img: string
}

const Product = (props: Props) => {
  const products: product[] = [
    { name: "Muscle Tank", price: 34.43, img: "/p1.png" },
    { name: "Brushed Bomber", price: 46.23, img: "/p2.png" },
    { name: "Reglan Sweatshirt", price: 74.93, img: "/p3.png" }
  ]
  return (
    <div className="my-40">
      <div className="text-center">
        <p className="text-blue-700 font-bold text-xl">Products</p>
        <p className="my-3 font-black text-5xl">Check what we have</p>
      </div>

      {/* Product Banner */}
      <div className="my-8 flex flex-wrap items-center justify-between">
        {products.map((element:product)=>
        <div>
          <div className="w-96">
            <Image width={384} height={220} src={element.img} alt="" />
          </div>
          <div>
            <p className="font-bold text-lg">{element.name}</p>
            <p className="font-extrabold text-2xl">${element.price}</p>
          </div>
        </div>
      )}
      </div>
    </div>
  )
}

export default Product
