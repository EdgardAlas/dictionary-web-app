'use client';
import Play from '@/assets/images/icon-play.svg?url';
import Image from 'next/image';

interface PhoneticPlayProps {
	audio?: string;
}

export const PhoneticPlay = ({ audio }: PhoneticPlayProps) => {
	if (!audio) {
		return null;
	}

	return (
		<button
			className='relative size-12 self-center md:size-[4.6875rem]'
			onClick={() => {
				const phonetic = new Audio(audio);
				phonetic?.play();
			}}
		>
			<Image src={Play} alt='Play' fill />
		</button>
	);
};
