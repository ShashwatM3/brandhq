import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import "./Stage12.css";

function Stage12() {
  const [idea, setIdea] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [pain, setPain] = useState("");
  const [diff, setDiff] = useState("");
  const [stage, setStage] = useState("ideation")
  return (
    <div className='stages flex items-center justify-center h-full'>
      {stage=="ideation" ? (
        <div className='flex items-center justify-center flex-col' id='ideation'>
          <h1 className='scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance mb-5'>So what's your idea?</h1>
          <h3 className='scroll-m-20 text-xl font-light text-neutral-700 tracking-tight w-[60%] text-center mb-5'>Answer these questions about your idea so we can get a perfect understanding</h3>
          <br/>
          <div>
            <h3 className='mb-3 font-bold'>1. State your idea/product/startup in one line</h3>
            <Input onChange={(e) => {
              setIdea(e.target.value)
            }} value={idea} className='w-[40vw]' id="idea"/>
            <br/>
            <h3 className='mb-3 font-bold'>2. Who's the idea for?</h3>
            <Input onChange={(e) => {
              setTargetAudience(e.target.value)
            }} value={targetAudience} id="targetAudience"/>
            <br/>
            <h3 className='mb-3 font-bold'>3. What pain are you solving?</h3>
            <Input onChange={(e) => {
              setPain(e.target.value)
            }} value={pain} id="pain"/>
            <br/>
            <h3 className='mb-3 font-bold'>4. What makes your idea different from the competition? <span className='text-neutral-500 font-light'>(Optional)</span></h3>
            <Input onChange={(e) => {
              setDiff(e.target.value)
            }} value={diff} id="diff"/>
            <br/>
          </div>
          {(idea && targetAudience && pain) ? (
            <Button onClick={() => {
              setStage("brandIdentity")
            }}>Next</Button>
          ):(
            <Button disabled>Next</Button>
          )}
        </div>
      ):(
        <div id="brandIdentity">
          
        </div>
      )}
    </div>
  )
}

export default Stage12