"use client"

import React from "react"

type Props = {}

const Promotion = (props: Props) => {
  return (
    <div className="my-24">
      <div className="text-center my-8">
        <p className="text-xl font-bold mb-5 text-blue-700">Promotions</p>
        <p className="text-3xl font-black">Our Promotions Events</p>
      </div>

      {/* Promotion Gallery */}
      <div className="h-[400px] grid grid-cols-5 grid-rows-5 gap-8">
        {/* 1st Block */}
        <div className="bg-[#D6D6D8] col-span-3 row-span-3 flex items-center justify-between px-12">
          <div className="text-3xl font-extrabold">
            <p>
              GET UP TO <span className="text-4xl font-black">60%</span>
            </p>
            <p>For the summer season</p>
          </div>
          <div className="h-[100%]">
            <img className="h-[100%]" src="/event1.webp" alt="" />
          </div>
        </div>

        {/* 2nd Block */}
        <div className="bg-[#EFE1C7] pt-6 row-span-5">
          <div className="flex flex-col items-center justify-between">
            <div className="text-lg font-bold">
              <p>Flex SweatShirt</p>
              <div className="flex gap-2">
                <p className="line-through">$100.00</p>
                <p className="text-xl font-extrabold">$75.00</p>
              </div>
            </div>

            <div className="w-[86%]">
              <img className="object-cover" src="/event2.webp" alt="" />
            </div>
          </div>
        </div>

        {/* 3rd Block */}
        <div className="bg-[#D6D6D8] pt-6 row-span-5">
          <div className="flex flex-col items-center justify-between">
            <div className="text-lg font-bold">
              <p>Flex Push Button Bomber</p>
              <div className="flex gap-2">
                <p className="line-through">$100.00</p>
                <p className="text-xl font-extrabold">$75.00</p>
              </div>
            </div>

            <div className="w-[85%]">
              <img className="object-cover" src="/event3.webp" alt="" />
            </div>
          </div>
        </div>


        {/* 4th Block */}
        <div className="bg-[#191919] py-6 text-white flex flex-col items-center capitalize justify-between row-span-2 col-span-3">
            <p className="text-4xl font-extrabold">GET 30% Off</p>
            <div className="text-center uppercase">
              <p className="text-sm z-10">use promo code</p>
              <p className="text-lg py-1 px-16 rounded-lg font-semibold tracking-wide bg-transparent bg-[#474747]">DINE WEEKEND SALE</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Promotion
