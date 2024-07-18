import { Typography } from '@/components/ui/typography';
import React from 'react';
import NewWindow from '@/assets/images/icon-new-window.svg';

interface SourceProps {
	source?: string;
}

export const Source = ({ source }: SourceProps) => {
	if (!source) {
		return null;
	}

	return (
		<section className='mb-12 flex flex-col gap-1 underline-offset-4 md:flex-row md:items-center md:gap-4'>
			<Typography variant={'body-s'} className='text-theme-gray-300 underline'>
				Source
			</Typography>
			<a href={source} target='_blank' rel='noreferrer'>
				<Typography variant={'body-s'} className='inline-flex gap-2 underline'>
					{source}
					<NewWindow />
				</Typography>
			</a>
		</section>
	);
};
