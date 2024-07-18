import { PhoneticPlay } from '@/components/ui/phonetic-play';
import { Typography } from '@/components/ui/typography';
import { getWordDefinition } from '@/services/dictionary';
import { notFound } from 'next/navigation';

const findWord = async (word: string) => {
	const data = await getWordDefinition(word);

	if ('title' in data) {
		return undefined;
	}

	return data.find((item) => item.phonetics);
};

interface HomePageProps {
	params: {
		word: string[];
	};
}

export default async function Home({ params }: HomePageProps) {
	if (params.word?.length > 2) {
		notFound();
	}

	const wordList = await findWord(params.word?.[0] ?? '');

	if (!wordList && params.word?.length) {
		notFound();
	}

	return (
		<>
			<section className='flex justify-between'>
				<section>
					<Typography as='h1' variant={'heading-l'} fontWeight={'bold'}>
						{wordList?.word}
					</Typography>
					<Typography
						as='p'
						variant={'heading-m'}
						className='text-theme-purple-100'
					>
						{wordList?.phonetic}
					</Typography>
				</section>

				<PhoneticPlay
					audio={wordList?.phonetics.find((item) => item.audio)?.audio}
				/>
			</section>
		</>
	);
}
