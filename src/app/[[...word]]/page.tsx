import { WordTitle } from '@/components/ui/word-title';
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
			<WordTitle
				word={wordList?.word}
				phonetic={wordList?.phonetic}
				audio={wordList?.phonetics.find((item) => item.audio)?.audio}
			/>
		</>
	);
}
