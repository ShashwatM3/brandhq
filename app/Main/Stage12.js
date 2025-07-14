import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import "./Stage12.css";
import { ThemeCard } from '@/components/ThemeCard';
import ColorPaletteSelector from '@/components/ColorPaletteSelector';
import { toast } from 'sonner';

function Stage12() {
  const [idea, setIdea] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [pain, setPain] = useState("");
  const [diff, setDiff] = useState("");
  const [stage, setStage] = useState("ideation")
  const [selectedTheme, setSelectedTheme] = useState("");
  const [selectPalette, setSelectPalette] = useState("");
  const [finalIdea, setFinalIdea] = useState(null);

  const colorPalettesByTheme = {
    Minimal: [
      {
        name: "Mono",
        colors: ["#000000", "#333333", "#FFFFFF"],
        vibe: "Sleek & minimal",
      },
      {
        name: "Mist",
        colors: ["#F5F5F5", "#D6D6D6", "#BDBDBD"],
        vibe: "Soft & neutral",
      },
      {
        name: "Stone",
        colors: ["#FAFAFA", "#A8A8A8", "#5C5C5C"],
        vibe: "Modern grayscale",
      },
      {
        name: "Ivory",
        colors: ["#FFFFF0", "#F5DEB3", "#C8AD7F"],
        vibe: "Elegant & quiet",
      },
      {
        name: "Cloud",
        colors: ["#E0E7FF", "#C7D2FE", "#A5B4FC"],
        vibe: "Cool & clean",
      },
    ],
    Bold: [
      {
        name: "Sunset",
        colors: ["#F46036", "#FFBA49", "#EF5B5B"],
        vibe: "Bold & emotional",
      },
      {
        name: "Citrus",
        colors: ["#FFE066", "#FF6B6B", "#FFD93D"],
        vibe: "Bright & sharp",
      },
      {
        name: "Firestorm",
        colors: ["#FF3C38", "#FF9F1C", "#FFB627"],
        vibe: "Energetic & fierce",
      },
      {
        name: "Punk",
        colors: ["#FF61A6", "#6B00B6", "#0FF0FC"],
        vibe: "Vibrant & edgy",
      },
      {
        name: "Midnight Heat",
        colors: ["#1A1A1D", "#FF5733", "#C70039"],
        vibe: "Moody & striking",
      },
    ],
    Playful: [
      {
        name: "Confetti",
        colors: ["#FF6B6B", "#FFD93D", "#6BCB77"],
        vibe: "Bright & fun",
      },
      {
        name: "Lollipop",
        colors: ["#FF90E8", "#FFEB3B", "#FFC300"],
        vibe: "Sweet & energetic",
      },
      {
        name: "Bubblegum",
        colors: ["#FFB6C1", "#87CEFA", "#FFE4E1"],
        vibe: "Cute & bubbly",
      },
      {
        name: "Tutti Frutti",
        colors: ["#FF6961", "#FFB347", "#77DD77"],
        vibe: "Mixed & playful",
      },
      {
        name: "Popcorn",
        colors: ["#FFFACD", "#FFD700", "#FF69B4"],
        vibe: "Youthful & casual",
      },
    ],
    Trustworthy: [
      {
        name: "Ocean",
        colors: ["#004E64", "#00A5CF", "#E8F1F2"],
        vibe: "Professional & calming",
      },
      {
        name: "Slate",
        colors: ["#3C4C63", "#7D8CA3", "#D9E2EC"],
        vibe: "Reliable & soft",
      },
      {
        name: "Navy Calm",
        colors: ["#1B263B", "#415A77", "#778DA9"],
        vibe: "Quiet & deep",
      },
      {
        name: "Cool Mint",
        colors: ["#D4F1F4", "#75E6DA", "#05445E"],
        vibe: "Fresh & safe",
      },
      {
        name: "Steel Blue",
        colors: ["#5D737E", "#64B6AC", "#C0FDFB"],
        vibe: "Balanced & secure",
      },
    ],
    Futuristic: [
      {
        name: "Neon Pulse",
        colors: ["#0FF0FC", "#3A0088", "#FF61A6"],
        vibe: "Electric & techy",
      },
      {
        name: "Cyber Grit",
        colors: ["#0F0F0F", "#2F2F2F", "#00FFF7"],
        vibe: "Dark mode + glow",
      },
      {
        name: "Glitch",
        colors: ["#FD1056", "#8338EC", "#3A86FF"],
        vibe: "Digital & glitchy",
      },
      {
        name: "Matrix",
        colors: ["#000000", "#1DB954", "#222222"],
        vibe: "Neo tech",
      },
      {
        name: "Galactic",
        colors: ["#120136", "#035aa6", "#40bad5"],
        vibe: "Cosmic & clean",
      },
    ],
    Luxury: [
      {
        name: "Gold Noir",
        colors: ["#0D0D0D", "#FFD700", "#8B8000"],
        vibe: "Elegant & rich",
      },
      {
        name: "Ivory Rose",
        colors: ["#FFF8F0", "#F2D0A4", "#A67B5B"],
        vibe: "Subtle & premium",
      },
      {
        name: "Velvet",
        colors: ["#2C003E", "#7209B7", "#F72585"],
        vibe: "Regal & rare",
      },
      {
        name: "Champagne",
        colors: ["#FAF3DD", "#E6D3B3", "#C9B79C"],
        vibe: "Polished & classy",
      },
      {
        name: "Dark Gold",
        colors: ["#1E1E1E", "#CDA434", "#8C6A03"],
        vibe: "Sophisticated contrast",
      },
    ],
  };  
  
  
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
      tags: ["Techy", "Dark", "Cyber Aesthetic"],
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

  const handlePaletteSelect = (palette) => {
    console.log("Selected palette:", palette);
    setSelectPalette(palette);
  };

  function submitIdea() {
    toast.info("Setting brand identity + Analyzing Idea....")
    const finalIdea = {
      idea: idea,
      target_audience: targetAudience,
      pain: pain,
      differentiator: diff,
      theme: selectedTheme,
      color_palette: selectPalette
    }
    setFinalIdea(finalIdea);
  }
  
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
          <h3 id="chooseThemeTitle" className='scroll-m-20 text-xl font-light text-neutral-700 tracking-tight w-[60%] text-center mb-5'>Choose a theme to form a brand identity that we can use for customizing your dashboard</h3>
          <h3 id="enterThemeTitle" className='scroll-m-20 text-xl font-light text-neutral-700 tracking-tight w-[60%] text-center mb-5'>Enter a custom theme you wish to use to use for customizing your dashboard</h3>
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
              const el3 = document.getElementById("chooseThemeTitle");
              const el4 = document.getElementById("enterThemeTitle");
              if (el && el2) {
                el.style.display="none";
                el2.style.display="flex";
                el3.style.display="none";
                el4.style.display="block";
              }
            }} variant={'outline'} className='border-neutral-200 px-5 cursor-pointer'>Enter Custom Theme</Button>
          </div>
          <div id="customTheme" className='flex items-center justify-center flex-col'>
            <div className="flex items-center justify-center mb-5">
              <Input 
                onChange={(e) => {setSelectedTheme(e.target.value)}}
                value={selectedTheme}
                placeholder='Ex: Futuristic, like SpaceX + Video Games' 
                className='w-[40vw]'
              />
            </div>
            <Button onClick={() => {
              const el = document.getElementById("themeList");
              const el2 = document.getElementById("customTheme");
              if (el && el2) {
                el.style.display="flex";
                el2.style.display="none"
              }
            }}  variant={'outline'} className='border-neutral-200 px-5 cursor-pointer'>Choose from list instead</Button>
          </div>
          {selectedTheme ? (
            <div className="mt-6 text-center">
              <Button className='mb-3 border-neutral-300 mr-3' onClick={() => {
                setStage("ideation")
              }} variant={'outline'}>Back</Button>
              <Button className='mb-3' onClick={() => {
                setStage("brandIdentity2")
              }}>
                Next
              </Button>
              {/* <h3 className='text-neutral-400'>Stage 2/3</h3> */}
            </div>
          ):(
            <div className="mt-6 text-center">
              <Button className='mb-3 border-neutral-300 mr-3' onClick={() => {
                setStage("ideation")
              }} variant={'outline'}>Back</Button>
              <Button className='mb-3' disabled>
                Next
              </Button>
              {/* <h3 className='text-neutral-400'>Stage 2/3</h3> */}
            </div>
          )}
        </div>
      )}
      {stage=="brandIdentity2" && (
        <div id="brandIdentity2" className='flex items-center justify-center flex-col'>
          <h1 className='scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance mb-5'>Lastly, what color palette do you prefer?</h1>
          <h3 className='scroll-m-20 text-xl font-light text-neutral-700 tracking-tight w-[60%] text-center mb-5'>
            You can either choose from a pre-defined selection of color palettes or <b>let us find one for you!</b>
          </h3>
          <br/>
          <div className="max-w-3xl mx-auto px-4 py-4">
            {selectedTheme && colorPalettesByTheme[selectedTheme] ? (
              <ColorPaletteSelector
                palettes={colorPalettesByTheme[selectedTheme]}
                onSelect={handlePaletteSelect}
              />
            ) : (
              <p className="text-gray-500">Select a theme first to see matching palettes.</p>
            )}
            {selectedTheme ? (
            <div className="mt-6 text-center">
              <Button onClick={() => {setStage("brandIdentity1")}} className='mb-3 border-neutral-300 mr-3' variant={'outline'}>Back</Button>
              <Button onClick={submitIdea} className='mb-3'>Submit</Button>
            </div>
          ):(
            <div className="mt-6 text-center">
              <Button onClick={() => {setStage("brandIdentity1")}} className='mb-3 border-neutral-300 mr-3' variant={'outline'}>Back</Button>
              <Button className='mb-3' disabled>Submit</Button>
            </div>
          )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Stage12