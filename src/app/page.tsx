'use client';

import Search from '@/assets/images/icon-search.svg';

export default function Home() {
	return (
		<section className='relative'>
			<input
				className='h-12 w-full rounded-[1rem] bg-gray-100 py-[0.875rem] pr-14 ps-6 text-base font-bold focus:outline focus:outline-theme-purple-100 dark:bg-theme-black-300 md:h-16 md:py-[1.1875rem] md:text-[1.25rem]'
				autoFocus
			/>
			<Search className='absolute right-6 top-1/2 -translate-y-1/2' />
		</section>
	);
}
