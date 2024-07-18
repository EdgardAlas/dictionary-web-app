import { FontTypes } from '@/components/ui/font-switcher';
import { ThemeTypes } from '@/components/ui/theme-switcher';
import { cookies } from 'next/headers';

export const getConfig = () => {
	const theme = (cookies().get('theme')?.value ?? 'light') as ThemeTypes;
	const font = (cookies().get('font')?.value ?? 'serif') as FontTypes;

	return {
		theme,
		font,
	};
};
