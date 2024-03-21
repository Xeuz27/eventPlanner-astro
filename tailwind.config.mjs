/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				xs: '375px'
			},
			colors: {
				primary: '#03183b'
			}
		}
	},
	plugins: []
};
