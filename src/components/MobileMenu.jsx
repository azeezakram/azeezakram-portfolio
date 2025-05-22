import React from 'react';
import { IoClose } from 'react-icons/io5';
import siteLogoSlogan from '../assets/images/logo-slogan.svg';

const MobileMenu = ({ menuClicked, setMenuClicked }) => {
	return (
		<>
			<div
				className={`absolute block  lg:hidden top-0 right-0 left-0 p-6 bg-[#191b20] h-[100vh] z-51 ${
					menuClicked
						? 'translate-y-0 overflow-y-scroll'
						: '-translate-y-1000'
				} duration-800 ease-in-out`}>
				<div className=' top-4 -left-4 w-full h-[50px] flex justify-between items-center mb-8'>
					<img
						src={siteLogoSlogan}
						className={`h-[28px] m-1 hover:animate-pulse`}
						id='logo'
					/>
					<IoClose
						className='text-[25px] cursor-pointer'
						onClick={() => setMenuClicked(!menuClicked)}
					/>
				</div>
				<div className='h-fit flex [&>*]:border-b-1 gap-y-3 [&>*]:border-gray-600 [&>*]:pb-3 flex-col font-medium text-lg'>
					<a
						href='#hero'
						onClick={() => setMenuClicked(!menuClicked)}>
						Home
					</a>
					<a
						href='#about'
						onClick={() => setMenuClicked(!menuClicked)}>
						About Me
					</a>
					<a
						href='#services'
						onClick={() => setMenuClicked(!menuClicked)}>
						Services
					</a>
					<a
						href='#portfolios'
						onClick={() => setMenuClicked(!menuClicked)}>
						Portfolios
					</a>
					<a
						href='#contact'
						onClick={() => setMenuClicked(!menuClicked)}>
						Contact
					</a>
				</div>
			</div>
		</>
	);
};

export default MobileMenu;
