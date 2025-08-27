import React from 'react';

const Service = () => {

	// const services = [
	// 	{
	// 		name: "Web Development",
	// 		description: "Build fast, scalable, and stunning digital experiences",
	// 		image: 
	// 	}
	// ]

	return (
		<>
			<section className='backdrop-blur-3xl'>
				<div
					className='flex flex-col md:flex-row lg:flex-row xl:flex-row w-full min-h-[700px] xl:max-w-[1300px] mx-auto justify-center items-center'
					id='services'>
					
					<div className='flex flex-col w-full px-6 gap-y-10 xl:gap-y-8  text-justify  xl:px-0 '>
						<div className='flex  justify-center items-center flex-col-reverse gap-2'>
							<div className='h-[2px] w-full  bg-gray-500 '></div>
							<h1 className='text-[2.8rem] font-[200] xl:text-6xl text-nowrap leading-14 xl:leading-17 bg-gradient-to-r from-[#b8dbf2] to-gray-600 bg-clip-text text-transparent'>
								Services<span className='text-cyan-400'>.</span>
							</h1>
						</div>

						<div className='grid grid-cols-3 gap-20 mx-auto flex-wrap [&>div]:w-[300px] [&>div]:h-[330px] [&>div]:border-1 [&>div]:border-gray-700 [&>div]:bg-gray-700/15 [&>div]:rounded-2xl'>
							<div className='item'>Web Development</div>
							<div className='item'>Mobile Development</div>
							<div className='item'>UI/UX Design</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Service;
