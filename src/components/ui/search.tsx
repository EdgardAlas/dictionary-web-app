'use client';

import SearchIcon from '@/assets/images/icon-search.svg';
import { useParams, useRouter } from 'next/navigation';
import { useTransition } from 'react';

export const Search = () => {
	const router = useRouter();
	const [pending, startTransition] = useTransition();
	const params = useParams();

	return (
		<form
			className='relative mb-5 md:mb-[2.6875rem]'
			onSubmit={(e) => {
				e.preventDefault();

				if (pending) {
					return;
				}

				const search = (e.target as HTMLFormElement).search?.value;

				startTransition(() => {
					if (search) {
						router.push(`/${search}`);
					}
				});
			}}
		>
			<input
				defaultValue={params.word?.[0]}
				name='search'
				className='h-12 w-full rounded-[1rem] bg-gray-100 py-[0.875rem] pr-14 ps-6 text-base font-bold focus:outline focus:outline-theme-purple-100 dark:bg-theme-black-300 md:h-16 md:py-[1.1875rem] md:text-[1.25rem]'
				autoFocus
			/>
			<SearchIcon className='absolute right-6 top-1/2 -translate-y-1/2' />
		</form>
	);
};
