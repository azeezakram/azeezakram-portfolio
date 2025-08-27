import React from 'react';

import gridBg from '../assets/images/grid-bg.png'

// import myImageColor from '../assets/images/my-image-color.png';
import me from '../assets/me.png';
import siteLogoSlogan from '../assets/images/logo-slogan.svg';
import myResume from '../assets/documents/my-resume.pdf';
import {
    FaInstagram,
    FaFacebook,
    FaLinkedin,
    FaGithub,
    FaWhatsapp,
    FaAt,
} from 'react-icons/fa';
import {TbBrandWhatsapp} from 'react-icons/tb';

const Hero = () => {
    return (
        <>
            <section className='backdrop-blur-3xl relative overflow-hidden will-change-transform,opacity'>
                <img src={gridBg} className='min-w-full h-[110%] absolute  z-8 opacity-4 object-cover'/>
                {/* <img src={lightLeakBg} className='min-w-full h-[110%] absolute  z-9 opacity-50 object-cover' /> */}

                <div
                    className='flex items-center  flex-row gap-y-[80px] relative w-full xl:w-[1500px] h-screen  min-w-[300px] md:h-[500px] lg:h-[700px] xl:h-[100vh] justify-center   md:flex-row lg:flex-row xl:flex-col mx-auto my-[40px] md:my-0 xl:-mt-[130px] px-6'
                    id='hero'>
                    <div className="absolute -left-30 bottom-0  z-20">
                        <img
                            className="w-[80%] md:w-[350px] lg:w-[450px] xl:w-[550px]"
                            src={me}
                            alt="me"
                        />
                    </div>

                    <div className='flex flex-col gap-y-2 md:gap-y-5  z-40 absolute right-10 bottom-50'>

                        <div className='hidden md:block mx-auto p-3 md:p-4 lg:p-5 border-2  rounded-2xl md:rounded-4xl'
                             data-aos="flip-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
                            <img className='h-[30px] md:h-[60px]' src={siteLogoSlogan} alt='logo'/>
                        </div>
                        <h1 className='text-[2rem] font-[200] text-left md:text-6xl lg:text-7xl xl:text-8xl text-nowrap leading-9 xl:leading-23 bg-gradient-to-r from-[#b8dbf2] to-gray-600 bg-clip-text text-transparent'
                            data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
                            I<span className='text-cyan-400'>'</span>m<br/>
                            <span className='font-[500]'>Abdul Azeez.</span>
                        </h1>

                        <p className="text-sm font-[200] md:font-[100] md:text-5xl lg:text-6xl xl:text-7xl text-gray-400  text-left leading-4"
                           data-aos="fade-up" data-aos-duration="1000" data-aos-delay='100'
                           data-aos-easing="ease-in-out">
                            Dedicated{' '}
                            <span className=' text-cyan-400 text-nowrap'>
								Software Engineer
							</span>
                        </p>

                        <div
                            className='flex items-center justify-start gap-6 w-[100%] mx-auto mt-1 md:mt-0 lg-mt-0 xl:mt-2'
                            data-aos="fade-right" data-aos-duration="1000" data-aos-delay='200'
                            data-aos-easing="ease-in-out">
                            {/*<div*/}
                            {/*    className='flex w-fit gap-x-2 [&>a>*]:fill-gray-400  [&>a>*]:transition-all  duration-300 ease-in-out [&>a>*]:xl:text-2xl'>*/}
                            {/*    <a*/}
                            {/*        href='https://www.instagram.com/azeez_.akram/'*/}
                            {/*        target='_blank'*/}
                            {/*        className='[&>*]:hover:fill-pink-500'>*/}
                            {/*        <FaInstagram/>*/}
                            {/*    </a>*/}
                            {/*    <a*/}
                            {/*        href='https://www.facebook.com/profile.php?id=100015198558338'*/}
                            {/*        target='_blank'*/}
                            {/*        className='[&>*]:hover:fill-[#1877F2]'>*/}
                            {/*        <FaFacebook/>*/}
                            {/*    </a>*/}
                            {/*    <a*/}
                            {/*        href='https://www.linkedin.com/in/azeezakram'*/}
                            {/*        target='_blank'*/}
                            {/*        className='[&>*]:hover:fill-[#0077B5]'>*/}
                            {/*        <FaLinkedin/>*/}
                            {/*    </a>*/}
                            {/*    <a*/}
                            {/*        href='https://github.com/azeezakram'*/}
                            {/*        target='_blank'*/}
                            {/*        className='[&>*]:hover:fill-white'>*/}
                            {/*        <FaGithub/>*/}
                            {/*    </a>*/}
                            {/*    <a*/}
                            {/*        href='https://wa.me/94763666185'*/}
                            {/*        target='_blank'*/}
                            {/*        className='[&>*]:hover:fill-[#25D366]'>*/}
                            {/*        <FaWhatsapp/>*/}
                            {/*    </a>*/}
                            {/*    <a*/}
                            {/*        href='mailto:azeez7045@gmail.com'*/}
                            {/*        target='_blank'*/}
                            {/*        className='[&>*]:hover:fill-cyan-400'>*/}
                            {/*        <FaAt/>*/}
                            {/*    </a>*/}
                            {/*</div>*/}

                            {/*<div>*/}
                            {/*    <a*/}
                            {/*        href={myResume}*/}
                            {/*        className='text-gray-400 text-[0.8rem] lg:text-[0.9rem] font-[300] transition-all underline underline-offset-4 hover:text-white hover:no-underline  duration-200 ease-in-out'*/}
                            {/*        download>*/}
                            {/*        Download Resume*/}
                            {/*    </a>*/}
                            {/*</div>*/}
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
