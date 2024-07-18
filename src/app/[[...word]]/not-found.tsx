import NotFoundIcon from '@/assets/images/notfound.png';
import { Typography } from '@/components/ui/typography';
import Image from 'next/image';

const NotFound = () => {
	return (
		<section className='flex flex-col items-center gap-4 text-center'>
			<Image src={NotFoundIcon} alt='Not Found' />
			<Typography as='h1' variant={'heading-m'} fontWeight={'bold'}>
				No Definitions Found
			</Typography>
			<Typography variant={'body-m'}>
				{`Sorry pal, we couldn't find definitions for the word you were looking
				for. You can try the search again at later time or head to the web
				instead.`}
			</Typography>
		</section>
	);
};

export default NotFound;
