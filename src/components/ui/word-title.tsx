import { PhoneticPlay } from '@/components/ui/phonetic-play';
import { Typography } from '@/components/ui/typography';
import React from 'react';

interface WordTitleProps {
	word?: string;
	phonetic?: string;
	audio?: string;
}

export const WordTitle = ({ phonetic, audio, word }: WordTitleProps) => {
	return (
		<section className='mb-7 flex justify-between md:mb-10'>
			<section>
				<Typography as='h1' variant={'heading-l'} fontWeight={'bold'}>
					{word}
				</Typography>
				<Typography
					as='p'
					variant={'heading-m'}
					className='text-theme-purple-100'
				>
					{phonetic}
				</Typography>
			</section>

			<PhoneticPlay audio={audio} />
		</section>
	);
};
