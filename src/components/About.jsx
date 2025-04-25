import React from "react";



const About = () => {
  return (
    <>
        <div className="flex flex-col w-[100%] min-w-[300px] h-[600px] md:h-[700px] lg:h-[700px] xl:h-[700px] justify-around items-center md:flex-row lg:flex-row xl:flex-row mx-auto mt-10 md:mt-0 lg:mt-0 xl:mt-0 " id="hero">
            <div className="flex flex-col gap-y-3 xl:gap-y-5 mx-auto">
                <div className="flex">
                    <div className="h-[100] w-[2px] bg-gray-500 mr-4"></div>
                    <h1 className="text-[3rem] xl:text-6xl text-nowrap leading-14 xl:leading-17">ABOUT<br/>ME<span className="text-cyan-400">.</span></h1>
                </div>
                
            </div>
        </div>
    </>
  );
}

export default About;
