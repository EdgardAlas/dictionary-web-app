import { Header } from '@/components/layout/header';
import { Container } from '@/components/ui/container';
import { Search } from '@/components/ui/search';
import React from 'react';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<Container as='main' className='pt-[1.4375rem] md:pt-[3.625rem]'>
			<Header />
			<Search />

			{children}
		</Container>
	);
};
