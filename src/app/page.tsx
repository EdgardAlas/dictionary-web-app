import Logo from '@/assets/images/logo.svg';
import { ThemeSwitcher } from '@/components/ui/theme-switcher';
import { cookies } from 'next/headers';

export default function Home() {
	const theme = (cookies().get('theme')?.value ?? 'light') as 'light' | 'dark';

	return (
		<>
			<header className='flex items-center justify-between'>
				<Logo />
				<section className='flex items-center'>
					<ThemeSwitcher theme={theme} />
				</section>
			</header>
		</>
	);
}
