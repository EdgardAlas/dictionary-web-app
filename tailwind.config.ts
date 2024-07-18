import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: 'class',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: 'var(--font-sans)',
				serif: 'var(--font-serif)',
				mono: 'var(--font-mono)',
			},
			colors: {
				theme: {
					black: {
						400: 'var(--black-400)',
						300: 'var(--black-300)',
						200: 'var(--black-200)',
						100: 'var(--black-100)',
					},
					gray: {
						300: 'var(--gray-300)',
						200: 'var(--gray-200)',
						100: 'var(--gray-100)',
					},
					white: {
						100: 'var(--white-100)',
					},
					red: {
						100: 'var(--red-100)',
					},
					purple: {
						100: 'var(--purple-100)',
					},
				},
			},
		},
	},
	plugins: [],
};
export default config;
