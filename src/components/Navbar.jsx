import { React, ReactComponent, useEffect } from 'react';
import { CgMenuRight } from 'react-icons/cg';
import siteLogoFull  from '../assets/images/logo-full.svg';
import siteLogoSlogan from '../assets/images/logo-slogan.svg';
import { useState } from 'react';
import MobileMenu from '../components/MobileMenu';


export default function Navbar() {
	const [menuClicked, setMenuClicked] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	

	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 0;
			setScrolled(isScrolled);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);


	return (
		<>
			<nav className={`sticky top-0 left-0 right-0 z-50 backdrop-blur-sm transition-all duration-800 ease-in-out ${scrolled ? 'bg-black/15': ''}`}>
				<div
					className={`flex min-w-[300px] w-full xl:w-[1500px] m-auto  px-3 justify-between  items-center lg:px-5  transition-all duration-300 ease-in-out ${scrolled ? 'h-[60px] xl:h-[60px]': 'h-[70px] xl:h-[80px]'}`}
					id='header'>
					<div className='flex justify-start text-3xl w-full'>
						<a href='#hero' className='min-w-[95px]'>
							{scrolled ? 
								<img
								src={siteLogoSlogan}
								className={`h-[28px] m-1 hover:animate-pulse ${scrolled ? 'xl:h-[28px]' : ''}`}
								id='logo'
								/> :
								<img
								src={siteLogoFull}
								className={`h-[23px] m-1 hover:animate-pulse ${scrolled ? 'xl:h-[28px]' : ''}`}
								id='logo'
								/>
							}
						</a>
					</div>

					<div className='flex justify-center lg:w-[460px] '>
						<ul className='hidden lg:flex xl:flex gap-x-10 text-[0.8rem] font-[400] text-gray-400 gap-y-2 [&>*]:hover:animate-pulse tracking-[3px] text-nowrap'>
							<li>
								<a href='#about'>ABOUT ME</a>
							</li>
							<li>
								<a href='#services'>SERVICES</a>
							</li>
							<li>
								<a href=''>PORTFOLIOS</a>
							</li>
						</ul>
					</div>

					<div
						className='flex justify-center lg:hidden cursor-pointer'
						onClick={() => setMenuClicked(!menuClicked)}>
						<CgMenuRight className='w-auto h-[25px] lg:hidden text-[#b8dbf2]' />
					</div>

					<div className='hidden lg:block xl:w-full xl:flex xl:justify-end '>
						<a
							href=''
							className='text-gray-400 text-[0.8rem] font-medium border-[1px] border-solid px-6 py-2 rounded-4xl hover:bg-white hover:text-black hover:border-white transition-all  duration-200 ease-in-out'>
							Contact Me
						</a>
					</div>
				</div>
				<MobileMenu
					menuClicked={menuClicked}
					setMenuClicked={setMenuClicked}
				/>
			</nav>
		</>
	);
}
