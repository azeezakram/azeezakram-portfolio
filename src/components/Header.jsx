import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { BrowserRouter, Routes } from "react-router-dom";
import siteLogo from '../assets/images/logo.png';



export default function Header() {
    return (
        <>
            <header className="sticky top-0 left-0 right-0 z-50 flex min-w-[300px] w-full h-[90px] px-2 justify-between  items-center lg:px-5 xl:px-10 xl:h-[110px]  backdrop-blur-sm" id="header">
                <div className="flex justify-start text-3xl xl:w-fit">
                    <a href="#hero">
                        <img src={siteLogo} className="h-[60px] m-1 hover:animate-pulse xl:h-[70px]"/>
                    </a>
                </div>
                <div className="hidden w-fit bg-amber-500 lg:flex xl:flex">
                    
                </div>
                <div className="xl:w-fit text-5xl font-['Quicksand'] font-[800] text-gray-400">
                    <ul className="hidden lg:flex xl:flex flex-col text-[0.9rem] gap-y-2 font-thin [&>*]:hover:animate-pulse">
                        <li>
                            <a href="">ABOUT</a>
                        </li>
                        <li>
                            <a href="">PORTFOLIO</a>
                        </li>
                        <li>
                            <a href="">CONTACT</a>
                        </li>
                    </ul>
                    <HiOutlineMenuAlt4 className="h-[40px] xl:hidden lg:hidden"/>
                </div>
            </header>
        </>
    )
    
}