/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			violet: {
				50: '#f7f2fc',
				100: '#dfccf4',
				200: '#c7a6ec',
				300: '#b080e5',
				400: '#985add',
				500: '#8034d5',
				600: '#6b2bb2',
				700: '#55228f',
				800: '#40186b',
				900: '#2a0f48'
			},
			violent: '#e34234',
			hotpink: {
				50: '#ffffff',
				100: '#ffc7e3',
				200: '#ff8ec7',
				300: '#ff56aa',
				400: '#ff1d8e',
				500: '#e1177c',
				600: '#c3116a',
				700: '#a50c59',
				800: '#870647',
				900: '#690035'
			}
		},
		extend: {}
	},
	plugins: []
};
