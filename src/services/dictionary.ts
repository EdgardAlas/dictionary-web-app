const endpoint = 'https://api.dictionaryapi.dev/api/v2/entries/en/<word>';

export interface Dictionary {
	word: string;
	phonetic: string;
	phonetics: Phonetic[];
	origin: string;
	meanings: Meaning[];
}

export interface Meaning {
	partOfSpeech: string;
	definitions: Definition[];
	synonyms: string[];
	antonyms: string[];
}

export interface Definition {
	definition: string;
	example: string;
	synonyms: string[];
	antonyms: string[];
}

export interface Phonetic {
	text: string;
	audio?: string;
}

const NotFound = {
	title: 'No Definitions Found',
	message:
		"Sorry pal, we couldn't find definitions for the word you were looking for.",
	resolution:
		'You can try the search again at later time or head to the web instead.',
} as const;

export const getWordDefinition = async (word: string) => {
	const response = await fetch(endpoint.replace('<word>', word), {});
	const data = await response.json();
	return data as Dictionary[] | typeof NotFound;
};
