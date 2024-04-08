import type { StringLiteral } from 'typescript';
import img1 from '../assets/pag3_img3.webp';
import img2 from '../assets/pag3_img2.webp';
import img3 from '../assets/pag3_img1.webp';

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
interface SERVICIOS {
	title: string;
	description: string;
}
export const SERVICIOS = [
	{
		bgColor: 'uno',
		imgUrl: img1.src,
		title: 'ORGANIZACION COMPLETA',
		description:
			'Te acompaño durante todo el proceso de planificación, asesorandote y asi definir el tipo de evento, concepto, estilo y presupuesto; la contratación de proveedores, seguimiento de actividades, el diseño de los tiempos de la celebración, coordinación y logística del día del evento.'
	},
	{
		bgColor: 'dos',
		imgUrl: img2.src,
		title: 'ORGANIZACION PARCIAL',
		description:
			'Me involucro en la planificación en una fase más avan&shy;zada, cuando ya han sido contratados los principales proveedores como la locación, el catering y la decora&shy;ción. Continuo con el proceso de contratación del resto de proveedores necesarios y todas las actividades pre&shy;vias al evento, incluyendo la coordinación y logística de ese día.'
	},
	{
		bgColor: 'tres',
		imgUrl: img3.src,
		title: 'PROTOCOLO',
		description:
			'Inicio la coordinación un mes antes del evento. Recopi&shy;lando, verificando y confirmando la información de los proveedores que han sido contratados por el cliente. Diseño los tiempos de las actividades y coordino la logís&shy;tica del día del evento.'
	}
];
