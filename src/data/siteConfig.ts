interface navLinks {
	display: string;
	path: string;
	highlight?: boolean;
}
export const navLinks = [
	{ display: 'Inicio', path: '/' },
	{ display: 'Sobre Mi', path: '/sobre-mi' },
	{ display: 'Servicios', path: '/servicios' },
	{ display: 'Eventos', path: '/eventos' },
	{ display: 'Contactame', path: '/contactame', highlight: true }
];
interface footerLinks {
	display: string;
}
export const footerLinks = [
	{ display: 'Facebook' },
	{ display: 'Instagram' },
	{ display: 'Whatsapp' },
	{ display: 'Mail' }
];
