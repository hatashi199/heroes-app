/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,ts}'],
	theme: {
		extend: {
			colors: {
				heroes: {
					50: '#F0F3FF',
					100: '#E6EAFE',
					200: '#C9D1FD',
					300: '#ABB8FC',
					400: '#7E93FB',
					500: '#3758F9',
					600: '#2548F8',
					700: '#072FF8',
					800: '#0628D0',
					900: '#041C95',
					950: '#031054'
				}
			}
		}
	},
	plugins: []
};
