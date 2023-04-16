/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			height: {
				100: '72rem',
			},
		},
		colors: {
			black: '#151614',
			red: '#EF3C5A',
			black_mute: '#292B27',
			'black-alt': '#161514',
			white: '#FFFFEF',
			white_muted: '#B1B1A0',
			'theme-primary': '#0B2626',
			'theme-secondary': '#15403B',
			'accent-primary': '#D9A566',
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#0B2626',

					secondary: '#15403B',

					accent: '#D9A566',

					neutral: '#151614',

					'base-100': '#151614',

					white: '#FFFFEF',

					white_muted: '#B1B1A0',

					info: '#3ABFF8',

					success: '#36D399',

					warning: '#FBBD23',

					error: '#F87272',
				},
			},
		],
	},
}
