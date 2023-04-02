/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		colors: {
			black: '#151614',
			'black-alt': '#161514',
			white: '#FFFFEF',
			white_muted: '#B1B1A0',
			'theme-primary': '#0B2626',
			'theme-secondary': '#15403B',
			'accent-primary': '#D9A566',
		},
	},
	plugins: [],
}
