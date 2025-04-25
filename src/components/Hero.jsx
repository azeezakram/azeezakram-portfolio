import React from "react";

const Hero = () => {
  return (
    <>
        <div className="flex flex-col w-[100%] h-[700px] justify-around items-center md:flex-row lg:flex-row xl:flex-row  min-w-[300px]">
            <div className="flex flex-col gap-y-5">
                <div className="flex">
                    <div className="h-[100] w-[2px] bg-gray-500 mr-4"></div>
                    <h1 className="text-[3rem] xl:text-6xl text-nowrap">I<span className="text-cyan-400">'</span>M <br/>ABDUL AZEEZ</h1>
                </div>
                
                <p className="text-xl text-gray-400 font-['Quicksand'] font-thin">Dedicated <span className="font-[600] text-cyan-400"><span className="text-cyan-400">S</span>oftware <span className="text-cyan-400">E</span>ngineer</span></p>
            </div>
            <div className="h-[300px] xl:relative lg:h-[400px] xl:h-[450px] xl:w-[450px] group">
                <img
                    src="./src/assets/my-image.png"
                    className="xl:absolute h-full w-full lg:rounded-[500px] xl:rounded-[500px] object-cover transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:scale-110"
                />
                <img
                    src="./src/assets/my-image-color.png"
                    className="absolute h-full w-full rounded-[500px] object-cover opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-110 group-hover:rounded-none"
                />
                </div>
        </div>
    </>
  );
}

export default Hero;
