import ReactDOM from 'react-dom';
import { useState } from 'react';
import { navLinks } from '../data/siteConfig';
import logo from '@assets/Edit_01.webp';
const navMobile = '';

const Nav = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(true);
	const menuLeft = isMenuOpen ? 'left-0' : 'left-[-320px]';
	const menuBg = isMenuOpen ? 'bg-white' : 'bg-black';
	const MenuButton = ReactDOM.createPortal(
		<div
			onClick={() => setIsMenuOpen(!isMenuOpen)}
			className="absolute left-7 top-[26px] flex cursor-pointer flex-col gap-1 md:hidden"
		>
			<div
				className={`pointer-events-none h-[3px] w-5 transition-all duration-300 ${menuBg} ${isMenuOpen ? 'translate-y-[7px] rotate-45' : ' '} `}
			></div>
			<div
				className={`pointer-events-none h-[3px] w-5 transition-all duration-300 ${menuBg} ${isMenuOpen ? 'opacity-0' : ' '}`}
			></div>
			<div
				className={`pointer-events-none h-[3px] w-5 transition-all duration-300 ${menuBg} ${isMenuOpen ? '-translate-y-[7px] -rotate-45' : ' '}`}
			></div>
		</div>,
		document.getElementById('menuBtn')
	);
	return (
		<header
			className={`fixed bottom-0 xs:w-[300px] ${menuLeft} top-0 flex w-full flex-col items-center gap-2 bg-primary px-8 py-4 transition-all duration-500 md:inset-auto md:w-full md:flex-row md:justify-between md:px-4`}
		>
			<div className="flex w-full flex-row-reverse items-center justify-between md:w-auto">
				<div className="h-[36px] w-[57px] overflow-hidden">
					<a href="/" title="go home">
						<img
							src={logo.src}
							className="relative bottom-[2px] left-[-4px] w-60 scale-[1.75] shadow-sm shadow-white"
							alt="logo de Miguel Galicia"
						/>
					</a>
				</div>
				{MenuButton}
			</div>
			<nav className="mx-auto">
				<ul className="flex flex-col items-center gap-4 md:flex-row">
					{navLinks.map(({ display, path, highlight = false }) => {
						const classes = `text-white text-opacity-50 text-lg flex font-semibold tracking-wide rounded-full py-1 px-4 hover:text-opacity-100 transition-colors duration-300`;
						const afterActiveLink =
							"after:bg-white after:absolute after:-top-4 after:hidden after:h-2 after:w-full after:content-[''] after:hover:block";
						return (
							<li className="relative">
								<a
									className={`${classes} ${highlight && 'bg-white bg-opacity-80  text-black text-opacity-95 hover:bg-opacity-20 hover:text-white hover:text-opacity-100'}`}
									href={path}
								>
									{display}
								</a>
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
};
export default Nav;
