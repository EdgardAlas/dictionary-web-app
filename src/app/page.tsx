import Logo from '@/assets/images/logo.svg';
import { FontSwitcher, FontTypes } from '@/components/ui/font-switcher';
import { ThemeSwitcher } from '@/components/ui/theme-switcher';
import { cookies } from 'next/headers';

export default function Home() {
	const theme = (cookies().get('theme')?.value ?? 'light') as 'light' | 'dark';
	const font = (cookies().get('font')?.value ?? 'sans') as FontTypes;

	return (
		<>
			<header className='flex items-center justify-between'>
				<Logo />
				<section className='flex items-center gap-x-4 divide-x-2'>
					<FontSwitcher font={font} />
					<div className='ps-4'>
						<ThemeSwitcher theme={theme} />
					</div>
				</section>
			</header>
		</>
	);
}
