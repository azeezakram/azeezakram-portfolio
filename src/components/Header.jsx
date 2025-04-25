import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { BrowserRouter, Routes } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header className="flex min-w-[300px] h-[90px] px-2 justify-between items-center xl:px-10 xl:h-[110px] ">
                <div className="flex justify-start text-3xl xl:w-fit">
                    <a href="">
                        <img src="./src/assets/logo.png" className="h-[60px] m-1 hover:animate-pulse xl:h-[70px]"/>
                    </a>
                </div>
                <div className="hidden w-fit bg-amber-500 lg:flex xl:flex">
                    
                </div>
                <div className="xl:w-fit text-5xl text-white">
                    <ul className="hidden xl:flex flex-col text-[0.9rem] gap-y-2 font-thin [&>*]:hover:animate-pulse">
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
                    <HiOutlineMenuAlt4 className="h-[40px] xl:hidden"/>
                </div>
            </header>
        </>
    )
    
}