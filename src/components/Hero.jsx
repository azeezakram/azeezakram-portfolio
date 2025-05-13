import React from 'react';
import myImageColor from '../assets/images/my-image-color.png';
import myResume from '../assets/documents/my-resume.pdf';
import {
	FaInstagram,
	FaFacebook,
	FaLinkedin,
	FaGithub,
	FaWhatsapp,
	FaAt,
} from 'react-icons/fa';
import { TbBrandWhatsapp } from 'react-icons/tb';

const Hero = () => {
	return (
		<>
			<section className='backdrop-blur-3xl'>
				<div
					className='flex items-center flex-col gap-y-[80px] relative w-full xl:w-[1500px] min-h-[700px] pt-[130px] min-w-[300px] md:h-[100px] lg:h-[700px] xl:h-[100vh] justify-center md:justify-around lg:justify-around xl:justify-center  md:flex-row lg:flex-row xl:flex-col mx-auto my-auto -mt-[80px] xl:-mt-[130px]'
					id='hero'>
					<div className='flex flex-col gap-y-3 xl:gap-y-5  z-10 '>
						<h1 className='text-[2.8rem] font-[400] xl:text-8xl text-nowrap leading-14 xl:leading-23 bg-gradient-to-r from-[#b8dbf2] to-gray-600 bg-clip-text text-transparent text-center'>
							I<span className='text-cyan-400'>'</span>m 
							Abdul Azeez
						</h1>

						{/* <div className='flex'>
							 <div className='h-[100] w-[2px] bg-gray-500 mr-4'></div>
							<h1 className='text-[2.8rem] font-[500] xl:text-6xl text-nowrap leading-14 xl:leading-17 bg-gradient-to-r from-[#b8dbf2] to-gray-600 bg-clip-text text-transparent'>
								I<span className='text-cyan-400'>'</span>m <br />
								Abdul Azeez
							</h1>
						</div> */}

						<p className="text-md xl:text-7xl text-gray-400  font-thin">
							Dedicated{' '}
							<span className='font-[400] text-cyan-400'>
								Software Engineer
							</span>
						</p>

						<div className='flex items-center justify-start gap-6 w-[100%] mx-auto mt-1 md:mt-0 lg-mt-0 xl:mt-2'>
							<div className='flex w-fit gap-x-2 [&>a>*]:fill-gray-400  [&>a>*]:transition-all  duration-300 ease-in-out [&>a>*]:text-2xl'>
								<a
									href='https://www.instagram.com/azeez_.akram/'
									target='_blank'
									className='[&>*]:hover:fill-pink-500'>
									<FaInstagram />
								</a>
								<a
									href='https://www.facebook.com/profile.php?id=100015198558338'
									target='_blank'
									className='[&>*]:hover:fill-[#1877F2]'>
									<FaFacebook />
								</a>
								<a
									href='https://www.linkedin.com/in/azeezakram'
									target='_blank'
									className='[&>*]:hover:fill-[#0077B5]'>
									<FaLinkedin />
								</a>
								<a
									href='https://github.com/azeezakram'
									target='_blank'
									className='[&>*]:hover:fill-white'>
									<FaGithub />
								</a>
								<a
									href='https://wa.me/94763666185'
									target='_blank'
									className='[&>*]:hover:fill-[#25D366]'>
									<FaWhatsapp />
								</a>
								<a
									href='mailto:azeez7045@gmail.com'
									target='_blank'
									className='[&>*]:hover:fill-cyan-400'>
									<FaAt />
								</a>
							</div>

							<div>
								<a
									href={myResume}
									className='text-gray-400 text-[0.8rem] lg:text-[0.9rem] font-[500] transition-all underline underline-offset-4 hover:text-white hover:no-underline  duration-200 ease-in-out'
									download>
									Download Resume
								</a>
							</div>
						</div>
					</div>

					{/* <div className='h-[300px] w-[300px] lg:h-[400px] lg:w-[400px] xl:h-[450px] xl:w-[450px] '>
						<img
							src={myImageColor}
							className='h-full w-full rounded-[500px] object-cover grayscale  transition-all duration-500 ease-in-out 
                    hover:grayscale-0  hover:scale-105'
						/>
					</div> */}
				</div>
			</section>
		</>
	);
};

export default Hero;
