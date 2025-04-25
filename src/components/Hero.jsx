import React from "react";
import myImage from '../assets/images/my-image.png';
import myImageColor from '../assets/images/my-image-color.png';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


const Hero = () => {
  return (
    <>
        <div className="flex flex-col w-[100%] min-w-[300px] h-[600px] md:h-[700px] lg:h-[700px] xl:h-[700px] justify-around items-center md:flex-row lg:flex-row xl:flex-row mx-auto mt-10 md:mt-0 lg:mt-0 xl:mt-0 " id="hero">
            <div className="flex flex-col gap-y-3 xl:gap-y-5 mx-auto">
                <div className="flex">
                    <div className="h-[100] w-[2px] bg-gray-500 mr-4"></div>
                    <h1 className="text-[3rem] xl:text-6xl text-nowrap leading-14 xl:leading-17">I<span className="text-cyan-400">'</span>M <br/>ABDUL AZEEZ</h1>
                </div>
                
                <p className="text-xl text-gray-400 font-['Quicksand'] font-thin">Dedicated <span className="font-[600] text-cyan-400"><span className="text-cyan-400">S</span>oftware <span className="text-cyan-400">E</span>ngineer</span></p>
                <div className="flex items-start w-[100%] mx-auto gap-x-2 [&>a>*]:fill-gray-400 [&>a>*]:hover:fill-cyan-400 [&>a>*]:transition-all  duration-300 ease-in-out mt-1 md:mt-0 lg-mt-0 xl:mt-0">
                    <a href="https://www.instagram.com/azeez_.akram/" target="_blank"><FaInstagram /></a>
                    <a href="https://www.facebook.com/profile.php?id=100015198558338" target="_blank"><FaFacebook /></a>
                    <a href="https://www.linkedin.com/in/azeezakram" target="_blank"><FaLinkedin /></a>
                    <a href="https://github.com/azeezakram" target="_blank"><FaGithub /></a>
                    <a href="https://wa.me/94763666185" target="_blank"><FaWhatsapp /></a>
                </div>
            </div>
            <div className="h-[300px] w-[300px] lg:h-[400px] lg:w-[400px] xl:h-[450px] xl:w-[450px] mx-auto">
                <img
                    src={myImageColor}
                    className="h-full w-full rounded-[500px] object-cover grayscale  transition-all duration-500 ease-in-out 
                    hover:grayscale-0  hover:scale-105"
                />
            </div>
        </div>
    </>
  );
}

export default Hero;
