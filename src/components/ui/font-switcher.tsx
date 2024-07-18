'use client';
import ChevronDown from '@/assets/images/icon-arrow-down.svg';
import { cn } from '@/lib/cn';
import { useState } from 'react';

export type FontTypes = 'sans' | 'serif' | 'mono';

interface FontSwitcherProps {
	font: FontTypes;
}

const fontPlachelolder: {
	// eslint-disable-next-line no-unused-vars
	[key in FontTypes]: string;
} = {
	sans: 'Sans Serif',
	serif: 'Serif',
	mono: 'Mono',
};

export const FontSwitcher = ({ font }: FontSwitcherProps) => {
	const [selectedFont, setSelectedFont] = useState<FontTypes>(font);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const handleFontChange = (font: FontTypes) => () => {
		setSelectedFont(font);
		isDropdownOpen && setIsDropdownOpen(false);
		document.cookie = `font=${font};`;
		document.body.className = document.body.className.replace(
			/sans|serif|mono/g,
			font
		);
	};

	return (
		<section className='relative z-20'>
			<button
				className='inline-flex h-6 items-center gap-4 text-[0.875rem] font-bold leading-6 md:text-[1.125rem]'
				onClick={() => setIsDropdownOpen((prev) => !prev)}
			>
				{fontPlachelolder[selectedFont]}
				<ChevronDown />
			</button>

			<ul
				className={cn(
					'absolute right-0 top-[2.6875rem] flex w-[11.4375rem] flex-col gap-4 rounded-2xl bg-white p-[1.4375rem] transition-opacity dark:bg-theme-black-300',
					{
						'pointer-events-none opacity-0': !isDropdownOpen,
					}
				)}
				style={{
					boxShadow: '0 5px 30px 0 var(--select-shadow-color)',
				}}
			>
				{options.map((option) => (
					<li
						key={option.value}
						className={cn(
							'cursor-pointer font-bold leading-6 hover:text-theme-purple-100',
							option.className,
							{
								'text-theme-purple-100': selectedFont === option.value,
							}
						)}
						role='button'
						tabIndex={0}
						onClick={handleFontChange(option.value)}
					>
						{option.title}
					</li>
				))}
			</ul>
		</section>
	);
};

const options: {
	title: string;
	value: FontTypes;
	className: string;
}[] = [
	{
		title: 'Sans Serif',
		value: 'sans',
		className: 'font-sans',
	},
	{
		title: 'Serif',
		value: 'serif',
		className: 'font-serif',
	},
	{
		title: 'Monospace',
		value: 'mono',
		className: 'font-mono',
	},
];
