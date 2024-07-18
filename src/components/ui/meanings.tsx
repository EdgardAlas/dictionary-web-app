import { Typography } from '@/components/ui/typography';
import { Definition, Meaning as MeaningType } from '@/services/dictionary';
import Link from 'next/link';

interface MeaningsProps {
	meanings?: MeaningType[];
}

export const Meanings = ({ meanings }: MeaningsProps) => {
	return (
		<section className='mb-12 grid gap-[3.75rem] md:gap-[2.8125rem]'>
			{meanings?.map((meaning, index) => (
				<Meaning key={index} meaning={meaning} />
			))}
		</section>
	);
};

const Meaning = ({ meaning }: { meaning: MeaningType }) => {
	return (
		<section className='grid gap-[1.875rem] md:gap-[2.8125rem]'>
			<section className='relative flex items-center gap-4'>
				<p className='text-[1.125rem] font-bold italic md:text-[1.5rem]'>
					{meaning.partOfSpeech}
				</p>
				<div className='h-[0.0625rem] flex-1 bg-theme-gray-200 transition-[background-color] dark:bg-theme-black-100' />
			</section>
			<section className='grid gap-2 md:gap-[1.5625rem]'>
				<Typography variant={'heading-s'} className='text-theme-gray-300'>
					Meaning
				</Typography>
				<ul className='grid gap-[0.8125rem] ps-4 md:gap-[0.5625rem] md:ps-12'>
					{meaning.definitions.map((definition, index) => (
						<li
							className='list-disc marker:text-[1.25rem] marker:text-theme-purple-100'
							key={index}
						>
							<MeaningDefinition definition={definition} />
						</li>
					))}
				</ul>
			</section>
			<Synonyms synonyms={meaning.synonyms} />
		</section>
	);
};

const MeaningDefinition = ({ definition }: { definition: Definition }) => {
	return (
		<div className='grid gap-2'>
			<Typography variant={'body-m'}>{definition.definition}</Typography>
			{definition.example && (
				<Typography variant={'body-m'} className='text-theme-gray-300'>
					{`"${definition.example}"`}
				</Typography>
			)}
		</div>
	);
};

const Synonyms = ({ synonyms }: { synonyms: string[] }) => {
	if (!synonyms.length) {
		return null;
	}

	return (
		<section className='flex flex-wrap gap-4'>
			<Typography
				variant={'heading-s'}
				className='pe-[1.375rem] text-theme-gray-300'
			>
				Synonyms
			</Typography>

			{synonyms.map((synonym, index) => (
				<Link key={index} href={`/${synonym}`}>
					<Typography
						variant={'body-m'}
						className='text-base font-bold text-theme-purple-100 md:text-[1.25rem]'
					>
						{synonym}
					</Typography>
				</Link>
			))}
		</section>
	);
};
