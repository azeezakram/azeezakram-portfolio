import React from 'react';
import { IoClose } from "react-icons/io5";

const MobileMenu = ({menuClicked, setMenuClicked}) => {
  return (
    <>
      <div className={`absolute block lg:hidden top-0 right-0 left-0 p-6 bg-black h-[100vh] z-51 ${menuClicked ? 'translate-y-0 overflow-y-scroll' : '-translate-y-250'} duration-300 ease-in-out`}>
        <div className='absolute top-4 -left-4 w-full h-[50px] flex justify-end items-center'>
          <IoClose className='text-[25px] cursor-pointer' onClick={() => setMenuClicked(!menuClicked)}/>
        </div>
        <div className='h-full flex justify-center items-center flex-col font-medium'>
          <a href="#hero" onClick={() => setMenuClicked(!menuClicked)}>Home</a>
          <a href='#about' onClick={() => setMenuClicked(!menuClicked)}>About Me</a>
          <a href='#services' onClick={() => setMenuClicked(!menuClicked)}>Services</a>
          <a href='#portfolios' onClick={() => setMenuClicked(!menuClicked)}>Portfolios</a>
          <a href='#contact' onClick={() => setMenuClicked(!menuClicked)}>Contact</a>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
