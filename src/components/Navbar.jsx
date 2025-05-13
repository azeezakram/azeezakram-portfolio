import { CgMenuRight } from 'react-icons/cg';
import siteLogo from '../assets/images/logo-bl.png';
import { useState } from 'react';
import MobileMenu from '../components/MobileMenu';

export default function Navbar() {
	const [menuClicked, setMenuClicked] = useState(false);

	window.addEventListener('scroll', () => {
		const navWrapper = document.querySelector('nav');
		const navElement = document.querySelector('#header');
		const logo = document.querySelector('#logo');

		if (window.scrollY > 0) {
			navElement.classList.remove('xl:h-[80px]');
			navElement.classList.add('xl:h-[60px]');
			navWrapper.classList.add('bg-black/15');
			logo.classList.add('xl:h-[30px]')
		} else {
			navWrapper.classList.remove('bg-black/15');
			navElement.classList.add('xl:h-[80px]');
			navElement.classList.remove('xl:h-[60px]');
		}
	});

	return (
		<>
			<nav className='sticky top-0 left-0 right-0 z-50 backdrop-blur-sm transition-all duration-800 ease-in-out'>
				<div
					className='flex min-w-[300px] w-full xl:w-[1500px] m-auto h-[80px] px-3 justify-between  items-center lg:px-5 xl:h-[80px] transition-all duration-300 ease-in-out'
					id='header'>
					<div className='flex justify-start text-3xl xl:w-full'>
						<a href='#hero'>
							<img
								src={siteLogo}
								className='h-[35px] m-1 hover:animate-pulse xl:h-[40px]'
								id='logo'
							/>
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
