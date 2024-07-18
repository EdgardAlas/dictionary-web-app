import { Meanings } from '@/components/ui/meanings';
import { Source } from '@/components/ui/source';
import { WordTitle } from '@/components/ui/word-title';
import { findWord } from '@/services/dictionary';
import { notFound } from 'next/navigation';
import { Metadata } from 'next/types';

interface HomePageProps {
	params: {
		word: string[];
	};
}

export async function generateMetadata({
	params,
}: HomePageProps): Promise<Metadata> {
	const word = await findWord(params.word?.[0]);

	if (!word) {
		return {
			title: 'Word not found',
		};
	}

	return {
		title: word.word,
		description: word.meanings?.[0].definitions?.[0].definition,
	};
}

export default async function Home({ params }: HomePageProps) {
	if (params.word?.length > 2) {
		notFound();
	}

	const word = await findWord(params.word?.[0]);

	if (!word && params.word?.length) {
		notFound();
	}

	return (
		<>
			<WordTitle
				word={word?.word}
				phonetic={word?.phonetic}
				audio={word?.phonetics.find((item) => item.audio)?.audio}
			/>
			<Meanings meanings={word?.meanings} />
			<Source source={word?.sourceUrls?.[0]} />
		</>
	);
}
