import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import "./Stage12.css";
import { ThemeCard } from '@/components/ThemeCard';

function Stage12() {
  const [idea, setIdea] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [pain, setPain] = useState("");
  const [diff, setDiff] = useState("");
  const [stage, setStage] = useState("ideation")
  const [selectedTheme, setSelectedTheme] = useState(null);
  
  const themes = [
    {
      name: "Minimal",
      // emoji: "🌿",
      // colors: "bg-gray-100 text-gray-800",
      // font: "font-light",
      tags: ["Clean", "Calm", "Neutral"],
    },
    {
      name: "Bold",
      // emoji: "🔥",
      // colors: "bg-red-600 text-white",
      // font: "font-extrabold",
      tags: ["Strong", "Loud", "Confident"],
    },
    {
      name: "Playful",
      // emoji: "🎨",
      // colors: "bg-pink-200 text-pink-800",
      // font: "font-medium",
      tags: ["Fun", "Bright", "Casual"],
    },
    {
      name: "Trustworthy",
      // emoji: "🛡️",
      // colors: "bg-blue-100 text-blue-800",
      // font: "font-semibold",
      tags: ["Reliable", "Calm", "Professional"],
    },
    {
      name: "Futuristic",
      // emoji: "🪐",
      // colors: "bg-black text-green-400",
      // font: "font-mono",
      tags: ["Techy", "Dark", "Neon"],
    },
    {
      name: "Luxury",
      // emoji: "💎",
      // colors: "bg-black text-yellow-400",
      // font: "font-serif",
      tags: ["Premium", "Elegant", "High-End"],
    },
  ];

  const handleThemeSelect = (themeName) => {
    setSelectedTheme(themeName);
  };
  
  return (
    <div className='stages flex items-center justify-center h-full'>
      {stage=="ideation" && (
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
              setStage("brandIdentity1")
            }}>Next</Button>
          ):(
            <Button disabled>Next</Button>
          )}
        </div>
      )}
      {stage=="brandIdentity1" &&(
        <div id="brandIdentity1" className='flex items-center justify-center flex-col'>
          <h1 className='scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance mb-5'>What vibe do you want your brand to have?</h1>
          <h3 className='scroll-m-20 text-xl font-light text-neutral-700 tracking-tight w-[60%] text-center mb-5'>Choose a theme to form a brand identity that we can use for customizing your dashboard</h3>
          <div id="themeList" className='flex items-center justify-center flex-col'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
              {themes.map((theme) => (
                <ThemeCard 
                  key={theme.name} 
                  {...theme} 
                  isSelected={selectedTheme === theme.name}
                  onSelect={() => handleThemeSelect(theme.name)}
                />
              ))}
            </div>
            <Button onClick={() => {
              const el = document.getElementById("themeList");
              const el2 = document.getElementById("customTheme");
              if (el && el2) {
                el.style.display="none";
                el2.style.display="flex"
              }
            }} variant={'outline'} className='border-neutral-200 px-5 cursor-pointer'>Enter Custom Theme</Button>
          </div>
          <div id="customTheme" className='flex items-center justify-center flex-col'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
              {/* TO MAKE THE CUSTOM THEME LIST OPTION */}
            </div>
            <Button onClick={() => {
              const el = document.getElementById("themeList");
              const el2 = document.getElementById("customTheme");
              if (el && el2) {
                el.style.display="flex";
                el2.style.display="none"
              }
            }}  variant={'outline'} className='border-neutral-200 px-5 cursor-pointer'>Choose from list</Button>
          </div>
          {selectedTheme ? (
            <div className="mt-6 text-center">
              <Button className='mb-3' onClick={() => {
                setStage("brandIdentity2")
              }}>
                Next
              </Button>
              {/* <h3 className='text-neutral-400'>Stage 2/3</h3> */}
            </div>
          ):(
            <div className="mt-6 text-center">
              <Button className='mb-3' disabled>
                Next
              </Button>
              {/* <h3 className='text-neutral-400'>Stage 2/3</h3> */}
            </div>
          )}
        </div>
      )}
      {stage=="brandIdentity2" &&(
        <div id="brandIdentity2" className='flex items-center justify-center flex-col'>
          <h1 className='scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance mb-5'>What vibe do you want your brand to have?</h1>
          <h3 className='scroll-m-20 text-xl font-light text-neutral-700 tracking-tight w-[60%] text-center mb-5'>Answer these questions about your idea so we can get a perfect understanding</h3>
        </div>
      )}
    </div>
  )
}

export default Stage12