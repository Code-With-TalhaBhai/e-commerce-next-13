'use client';
import React from 'react'
import Image from 'next/image';
import logo from "@/../public/Logo.webp";
import { Badge } from "@/components/ui/badge";
import { Facebook, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import Copyright from '../Copyright/Copyright';


type Props = {}

const Footer = (props: Props) => {
  return (
    <div>
    <div className='my-10 pb-10 flex border-b-2 border-black text-gray-600'>
      {/* Social Links */}
        <div className='flex flex-col gap-12 w-[30%]'>
          <Image height={160} width={160} src={logo} alt="...Loading"/>
          <p>Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
          <div className='flex gap-6'>
            <Badge className='bg-[#F1F1F1] rounded-sm text-black p-3'>
              <Twitter size={20} fill='currentColor'/>
            </Badge>

            <Badge className='bg-[#F1F1F1] rounded-sm text-black p-3'>
              <Facebook size={20} fill='currentColor'/>
            </Badge>

            <Badge className='bg-[#F1F1F1] rounded-sm text-black p-3'>
              <Linkedin size={20} fill='currentColor'/>
            </Badge>
          </div>

        </div>
      {/* Company Links */}

        <div className='flex text-lg w-full justify-evenly'>
          <div>
            <h3 className='text-2xl font-bold mb-10'>Company</h3>
            <div className='flex flex-col gap-3'>
              <Link href='/'>About</Link>
              <Link href='/'>Terms of Use</Link>
              <Link href='/'>Privacy Policy</Link>
              <Link href='/'>How it works</Link>
              <Link href='/'>Contact Us</Link>
            </div>
          </div>

          <div>
          <h3 className='text-2xl font-bold mb-10'>Support</h3>
            <div className='flex flex-col gap-3'>
              <Link href='/'>Support Career</Link>
              <Link href='/'>24h Service</Link>
              <Link href='/'>Quick Chat</Link>
            </div>
          </div>

          <div>
          <h3 className='text-2xl font-bold mb-10'>Contacts</h3>
            <div className='flex flex-col gap-3'>
              <Link href='/'>Whatsapp</Link>
              <Link href='/'>24h Service</Link>
            </div>
          </div>

        </div>
    </div>

    <div className='my-10'>
    <Copyright/>
    </div>

    </div>
  )
}

export default Footer