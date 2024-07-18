'use client';

import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/cn';
import { useState } from 'react';

interface ThemeSwitcherProps {
	theme?: 'light' | 'dark';
}

export const ThemeSwitcher = ({
	theme: themeProp = 'light',
}: ThemeSwitcherProps) => {
	const [theme, setTheme] = useState<'light' | 'dark'>(themeProp);

	const handleThemeChange = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';

		setTheme(newTheme);
		document.body.classList.toggle('dark');
		document.cookie = `theme=${newTheme};`;
	};

	return (
		<section className='flex items-center gap-3 md:gap-5'>
			<Switch
				id='theme-switch'
				name='theme-switch'
				aria-label='Switch between light and dark mode'
				onChange={handleThemeChange}
				checked={theme === 'dark'}
			/>
			<button aria-label='Toggle theme' onClick={handleThemeChange}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='22'
					height='22'
					viewBox='0 0 22 22'
				>
					<path
						fill='none'
						stroke='#838383'
						className={cn({
							'stroke-theme-purple-100': theme === 'dark',
							'stroke-[#838383]': theme !== 'dark',
						})}
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='1.5'
						d='M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z'
					/>
				</svg>
			</button>
		</section>
	);
};
