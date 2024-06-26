import ReactDOM from 'react-dom';
import { useState } from 'react';
import { navLinks } from '../data/siteConfig';
import logo from '@assets/Edit_01.webp';
const navMobile = '/*TODO: CREAR NAVMOBILE CLASSES CON TERNARIAS Y CONSTANTES*/';

const Nav = ({ bgColor, btnHighlightClass }) => {
	const bgColors = {
		primary: 'bg-primary',
		secondary: 'bg-neutral-300'
	};
	const linkClasses = {
		primary: 'text-white text-opacity-70 hover:text-opacity-100 hover:bg-white hover:bg-opacity-20',
		secondary: 'text-primary hover:text-white hover:bg-primary hover:bg-opacity-30'
	};
	const btnHighlightClasses = {
		primary: 'bg-white text-primary bg-opacity-80 hover:bg-opacity-20 hover:text-white',
		secondary:
			'bg-primary text-white text-opacity-70 bg-opacity-80  hover:text-white hover:text-opacity-100 hover:bg-primary hover:bg-opacity-30'
	};
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuLeft = isMenuOpen ? 'left-0' : 'left-[-100%]';
	const menuBg = isMenuOpen ? 'bg-white' : 'bg-white';
	const MenuButton = ReactDOM.createPortal(
		<div
			onClick={() => setIsMenuOpen(!isMenuOpen)}
			className="fixed left-7 top-[26px] z-30 flex cursor-pointer flex-col gap-1 border-[2px] border-black bg-black md:hidden"
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
			className={`fixed bottom-0 z-30 max-md:border-r xs:w-[300px] md:border-b md:border-stone-400 ${menuLeft} top-0 flex flex-col items-center gap-2 ${bgColors[bgColor]} px-8 py-4 transition-all duration-500 md:inset-auto md:w-full md:flex-row md:justify-between md:px-4`}
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
						const classes = `text-lg flex font-semibold tracking-wide rounded-full py-1 px-4 transition-colors duration-300`;
						const afterActiveLink =
							"after:bg-white after:absolute after:-top-4 after:hidden after:h-2 after:w-full after:content-[''] after:hover:block";
						return (
							<li key={path} className="relative">
								<a
									className={`${classes} ${highlight ? btnHighlightClasses[btnHighlightClass] : `${linkClasses[bgColor]}`}`}
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
