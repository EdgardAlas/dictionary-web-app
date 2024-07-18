import { Typography } from '@/components/ui/typography';
import { Meaning } from '@/services/dictionary';
import Link from 'next/link';

interface MeaningsProps {
	meanings?: Meaning[];
}

export const Meanings = ({ meanings }: MeaningsProps) => {
	return (
		<section className='mb-12 grid gap-[60px] md:gap-[45px]'>
			{meanings?.map((meaning, index) => (
				<section key={index} className='grid gap-[1.875rem] md:gap-[2.8125rem]'>
					<section className='relative flex items-center gap-4'>
						<p className='text-[18px] font-bold italic md:text-[24px]'>
							{meaning.partOfSpeech}
						</p>
						<div className='h-[1px] flex-1 bg-theme-gray-200 transition-[background-color] dark:bg-theme-black-100' />
					</section>
					<section className='grid gap-2 md:gap-[25px]'>
						<Typography variant={'heading-s'} className='text-theme-gray-300'>
							Meaning
						</Typography>
						<ul className='grid gap-[13px] ps-4 md:gap-[9px] md:ps-12'>
							{meaning.definitions.map((definition, index) => (
								<li
									className='list-disc marker:text-[20px] marker:text-theme-purple-100'
									key={index}
								>
									<div className='grid gap-2'>
										<Typography variant={'body-m'}>
											{definition.definition}
										</Typography>
										{definition.example && (
											<Typography
												variant={'body-m'}
												className='text-theme-gray-300'
											>
												{`"${definition.example}"`}
											</Typography>
										)}
									</div>
								</li>
							))}
						</ul>
					</section>
					{meaning.synonyms?.length ? (
						<section className='flex flex-wrap gap-4'>
							<Typography
								variant={'heading-s'}
								className='pe-[22px] text-theme-gray-300'
							>
								Synonyms
							</Typography>

							{meaning.synonyms.map((synonym, index) => (
								<Link key={index} href={`/${synonym}`}>
									<Typography
										variant={'body-m'}
										className='text-base font-bold text-theme-purple-100 md:text-[20px]'
									>
										{synonym}
									</Typography>
								</Link>
							))}
						</section>
					) : null}
				</section>
			))}
		</section>
	);
};
