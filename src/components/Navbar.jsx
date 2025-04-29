import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { CgMenuRight } from 'react-icons/cg';
import { BrowserRouter, Routes } from 'react-router-dom';
import siteLogo from '../assets/images/logo_2.png';

import MobileMenu from '../components/MobileMenu'
import { useState } from 'react';

export default function Navbar() {
  
  const [menuClicked, setMenuClicked] = useState(false);



  return (
    <>
      <nav className='sticky top-0 left-0 right-0 z-50 backdrop-blur-sm'>
        <div
          className='flex min-w-[300px] w-full xl:w-[1350px] m-auto h-[80px] px-3 justify-between  items-center lg:px-5 xl:h-[80px] '
          id='header'>
          <div className='flex justify-start text-3xl xl:w-full'>
            <a href='#hero'>
              <img
                src={siteLogo}
                className='h-[35px] m-1 hover:animate-pulse xl:h-[40px]'
              />
            </a>
          </div>

          

          <div className='flex justify-center lg:w-[460px] '>
            <ul className='hidden lg:flex xl:flex gap-x-10 text-[0.8rem] font-[400] text-gray-400 gap-y-2 [&>*]:hover:animate-pulse tracking-[3px] text-nowrap'>
              <li>
                <a href='#about'>ABOUT ME</a>
              </li>
              <li>
                <a href=''>SERVICES</a>
              </li>
              <li>
                <a href=''>PORTFOLIOS</a>
              </li>
            </ul>
          </div>

          <div className='flex justify-center lg:hidden cursor-pointer' onClick={() => setMenuClicked(!menuClicked)}>
            <CgMenuRight  className="w-auto h-[25px] lg:hidden"/>
          </div>

          <div className='hidden lg:block xl:w-full xl:flex xl:justify-end '>
            <a
              href=''
              className='text-gray-400 text-[0.8rem] font-medium border-1 border-solid px-5 py-2 hover:bg-white hover:text-black hover:border-white transition-all  duration-200 ease-in-out'>
              Contact Me
            </a>
          </div>
        </div>
        <MobileMenu menuClicked={menuClicked} setMenuClicked={setMenuClicked}/>
      </nav>
      
      
      
    </>
  );
}
