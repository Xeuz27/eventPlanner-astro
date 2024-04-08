import type { StringLiteral } from 'typescript';

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
	{ display: 'Contáctame', path: '/contactame', highlight: true }
];
interface footerLinks {
	display: string;
}
export const footerLinks = [
	{ display: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100036812820730' },
	{ display: 'Instagram', url: 'https://www.instagram.com/soymiguelgalicia/' },
	{
		display: 'Whatsapp',
		url: 'https://api.whatsapp.com/message/YH3NP3IJ2N7GB1?autoload=1&app_absent=0'
	},
	{ display: 'Mail' }
];
interface services {
	title: string;
	body: StringLiteral;
}
export const services = [
	{
		title: 'Wedding Planner ',
		body: `Organización de bodas
				Civiles
				Ecleciasticas
				Catolicas y Cristianas`
	},
	{
		title: 'Organización de eventos sociales',
		body: `Cumpleaños, 15 años, 
				Bautizos, Graduaciones, 
				Aniversarios, Comuniones, entre
				otras.`
	},
	{
		title: 'Presentación de marcas',
		body: `Si necesitas presentar tu marca,
				producto y servicio puedo 
				organizar esta presentación al
				publico, medios publicitarios.`
	},
	{
		title: 'Academicos',
		body: `Organización y planificación de
				cursos, talleres y clases especiales
				para un publico determinado.`
	},
	{
		title: 'Protocolo',
		body: `Equipo de profesionales que
				hacen parte de un evento para
				coordinar su efecto desarrollo`
	}
];
