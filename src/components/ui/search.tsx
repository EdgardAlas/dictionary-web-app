'use client';

import SearchIcon from '@/assets/images/icon-search.svg';
import { Typography } from '@/components/ui/typography';
import { cn } from '@/lib/cn';
import { useParams, useRouter } from 'next/navigation';
import { useRef, useState, useTransition } from 'react';

const errorMessage = 'Whoops, can’t be empty…';

export const Search = () => {
	const { handleSearch, handleOnChange, error, params, inputRef } = useSearch();

	return (
		<section className='mb-5 md:mb-[2.6875rem]'>
			<form className='relative' onSubmit={handleSearch}>
				<label htmlFor='search' className='sr-only'>
					Search
				</label>
				<input
					ref={inputRef}
					id='search'
					defaultValue={params.word?.[0]}
					name='search'
					placeholder='Search for any word…'
					onChange={handleOnChange}
					className={cn(
						'h-12 w-full rounded-[1rem] bg-gray-100 py-[0.875rem] pr-14 ps-6 text-base font-bold transition-[background-color] focus:outline focus:outline-theme-purple-100 dark:bg-theme-black-300 md:h-16 md:py-[1.1875rem] md:text-[1.25rem]',
						{
							'!outline !outline-[1px] !outline-theme-red-100': error,
						}
					)}
					autoFocus
				/>
				<button
					className='absolute right-6 top-1/2 -translate-y-1/2'
					type='submit'
				>
					<SearchIcon />
				</button>
			</form>
			{error && (
				<Typography variant={'heading-s'} className='mt-2 text-theme-red-100'>
					{error}
				</Typography>
			)}
		</section>
	);
};

const useSearch = () => {
	const router = useRouter();
	const [pending, startTransition] = useTransition();
	const [error, setError] = useState<string | null>(null);
	const params = useParams();
	const inputRef = useRef<HTMLInputElement>(null);

	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (pending) {
			return;
		}
		const search = (e.target as HTMLFormElement).search?.value;
		if (!search.trim()) {
			setError(errorMessage);
			return;
		}
		startTransition(() => {
			if (search) {
				inputRef.current?.blur();
				router.push(`/${search}`);
			}
		});
	};

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.value && error) {
			setError(null);
		}

		if (!e.target.value) {
			setError(errorMessage);
		}
	};

	return {
		handleSearch,
		handleOnChange,
		error,
		params,
		inputRef,
		pending,
		startTransition,
		router,
	};
};
