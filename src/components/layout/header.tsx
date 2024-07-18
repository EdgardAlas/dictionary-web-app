import Logo from '@/assets/images/logo.svg';
import { FontSwitcher } from '@/components/ui/font-switcher';
import { ThemeSwitcher } from '@/components/ui/theme-switcher';
import { getConfig } from '@/utils/get-config';

export const Header = () => {
	const { font, theme } = getConfig();

	return (
		<header className='mb-[23px] flex items-center justify-between md:mb-[3.25rem]'>
			<Logo />
			<section className='flex items-center gap-x-4 divide-x-2'>
				<FontSwitcher font={font} />
				<div className='ps-4'>
					<ThemeSwitcher theme={theme} />
				</div>
			</section>
		</header>
	);
};
