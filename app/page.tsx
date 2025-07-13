import React from 'react'
import LandingPage from "./LandingPage";
import Nav from "@/components/Nav";
import Minutes from "@/components/Minutes";
import Features from "@/components/Features";
import { AuroraText } from '@/components/ui/AuroraText';
import { Button } from '@/components/ui/button';
import Pricing from "@/components/Pricing";
import LoginButton from '@/components/LoginLogoutButton';
import LoginButton2 from '@/components/LoginLogoutButton2';

function Page() {
  return (
    <div>
      {/* <LoginButton/> */}
      <Nav/>
      <LandingPage/>
      <Minutes/><br/><br/><br/><br/><br/>
      <div className='flex items-center justify-center py-10 px-20  rounded-xl flex-col'>
          <h1 className='scroll-m-20 text-center text-4xl font-light text-neutral-500 tracking-tight text-balance mb-5'>
            78% of startup founders focus on product rather than the brand itself.  
          </h1>
          <h1 className='scroll-m-20 text-center text-4xl font-light tracking-tight text-balance mb-5'>
            No pre-launch distribution. No audience. Hours wasted on this
          </h1>
          <h1 className='scroll-m-20 text-center text-4xl font-semibold tracking-tight text-balance'>
            Using BrandHQ gives you a&nbsp;starting point
          </h1>
          {/* <br/>
          <Button className='bg-[#768BFF] text-lg px-8 mt-3 py-6 cursor-pointer hover:bg-[#6769f5] mb-2'>Find our what we offer</Button> */}
      </div>
      {/* <br/><br/><br/><br/> */}
      <Features/>
      <br/><br/>
      <Pricing/>
      <br/><br/><br/><br/>
      <div className='flex items-center justify-center flex-col'>
        <h1 className='scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance mb-4'>Do things fast. Do them better.</h1>
        <h3 className='scroll-m-20 text-2xl font-light text-neutral-800 tracking-tight mb-5'>Brand + Marketing, <span className='font-bold'>in minutes</span></h3>
        <LoginButton2/>
      </div>
      <br/><br/><br/>
    </div>
  )
}

export default Page