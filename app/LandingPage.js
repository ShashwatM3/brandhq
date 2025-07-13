'use client'
import { Button } from '@/components/ui/button'
import React from 'react';
import logo from "@/components/media/logo.png";
import Image from 'next/image';
import "./LandingPage.css";
import { useRouter } from 'next/navigation';
import LoginButton from '@/components/LoginLogoutButton';

function LandingPage() {
  const router = useRouter()
  return (
    <div className='landingpagemain h-[90vh] flex items-center justify-center'>
      <div className='flex items-center justify-center flex-col mt-10'>
        <div className='flex items-center justify-center gap-3 mb-10'>
        <div className='flex items-center bg-[#768BFF] py-4 px-4 rounded-lg justify-center'>
          <Image className='h-9 w-10 shadow-xl' src={logo} alt=''/>
        </div>
        <h3 className='text-2xl'>BrandHQ</h3>
        </div>
        <h1 className='scroll-m-20 text-center text-6xl font-extrabold tracking-tight text-balance'>Idea to Brand</h1>
        <h1 className='mb-6 scroll-m-20 text-center text-6xl font-extrabold tracking-tight text-balance'>Get it done in minutes</h1>
        <h3 className='scroll-m-20 text-2xl text-neutral-700 w-[40vw] tracking-tight text-center'>BrandHQ defines a well defined brand and marketing strategy for your product <b>in minutes</b></h3>
        <br/>
        <div className='flex items-center justify-center flex-col gap-3'>
          {/* <h3 onClick={() => {
            router.push("/login")
          }} className='cursor-pointer hover:bg-gray-100 px-9 py-3 rounded-md hover:transition-all'>Make account</h3> */}
          <LoginButton/>
        </div>
      </div>
    </div>
  )
}

export default LandingPage