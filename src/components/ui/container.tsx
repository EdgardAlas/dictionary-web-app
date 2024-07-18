import { cn } from '@/lib/cn';
import React, { ComponentProps } from 'react';

interface ContainerProps extends ComponentProps<'div'> {
	as?: 'div' | 'section' | 'main' | 'article' | 'header';
}

export const Container = ({
	as: Component = 'section',
	className,
	children,
	...props
}: ContainerProps) => {
	return (
		<Component
			{...props}
			className={cn(
				'mx-auto max-w-[20.4375rem] md:max-w-[43.0625rem] lg:max-w-[46rem]',
				className
			)}
		>
			{children}
		</Component>
	);
};
