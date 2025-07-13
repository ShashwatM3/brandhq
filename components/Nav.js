import React from 'react';
import "./Nav.css";

function Nav() {
  return (
    <div className='nav-main flex items-center justify-center text-lg fixed top-4 left-0 w-full'>
      <div className='flex items-center justify-center text-lg py-4 rounded-3xl gap-20 shadow-xl bg-white w-[60vw] z-20'>
        <a>Our Features</a>
        <a>How it works</a>
        <a>Use Cases</a>
        <a>Pricing</a>
        <a>About</a>
      </div>
    </div>
  )
}

export default Nav