import Image from 'next/image'
import React from 'react'
import logo from "@/components/media/logo.png";

function Minutes() {
  return (
    <div className='minutes-main flex items-center justify-center mt-5'>
      <div className='flex items-center justify-center flex-col'>
        <h1 className='scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance mb-3'>Your Product. Your Brand. We do the work</h1>
        <h3 className='scroll-m-20 text-2xl font-light tracking-tight mb-4'>Everything done in just a few clicks</h3>
        <br/>
        <div className='flex items-center jusitfy-center h-[60vh] w-[90vw] gap-4'>
          <div className='flex-1 shadow-xl rounded-lg border border-solid border-neutral-100 h-full flex items-center justify-center flex-col'>
            <div className='flex items-center justify-center'>
              <Image className='h-[24vw] w-auto' alt='' src={logo}/>
            </div>
            <div className='px-10'>
              <h1 className='scroll-m-20 text-2xl font-bold tracking-tight text-center mb-2'>Step 1: What's your idea?</h1>
              <h1 className='scroll-m-20 text-xl font-light tracking-tight text-center'>Explain to us the key aspects<br/> of your idea</h1>
              <br/>
            </div>
          </div>
          <div className='flex-1 shadow-xl rounded-lg border border-solid border-neutral-100 h-full flex items-center justify-center flex-col'>
            <div className='flex items-center justify-center'>
              <Image className='h-[24vw] w-auto' alt='' src={logo}/>
            </div>
            <div className='px-10'>
              <h1 className='scroll-m-20 text-2xl font-bold tracking-tight text-center mb-2'>Step 1: What's your idea?</h1>
              <h1 className='scroll-m-20 text-xl font-light tracking-tight text-center'>Explain to us the key aspects<br/> of your idea</h1>
              <br/>
            </div>
          </div>
          <div className='flex-1 shadow-xl rounded-lg border border-solid border-neutral-100 h-full flex items-center justify-center flex-col'>
            <div className='flex items-center justify-center'>
              <Image className='h-[24vw] w-auto' alt='' src={logo}/>
            </div>
            <div className='px-10'>
              <h1 className='scroll-m-20 text-2xl font-bold tracking-tight text-center mb-2'>Step 1: What's your idea?</h1>
              <h1 className='scroll-m-20 text-xl font-light tracking-tight text-center'>Explain to us the key aspects<br/> of your idea</h1>
              <br/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Minutes