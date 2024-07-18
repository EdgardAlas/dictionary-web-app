import { cn } from '@/lib/cn';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentPropsWithRef } from 'react';

export const typographyCVA = cva('', {
	variants: {
		variant: {
			'heading-l': 'text-[2rem] md:text-[4rem] md:leading-[4.8125rem]',
			'heading-m':
				'text-[1.125rem] leading-[1.5rem] md:text-[1.5rem] md:leading-[1.8125rem]',
			'heading-s': 'md:text-[1.25rem] md:leading-[1.5rem]',
			'body-m': 'md:text-[1.125rem] md:leading-[1.5rem]',
			'body-s': 'md:text-[0.875rem] md:leading-[1.0625rem]',
		},
		fontWeight: {
			regular: 'font-normal',
			bold: 'font-bold',
		},
		fontStyle: {
			italic: 'italic',
		},
		fontFamily: {
			sans: 'font-sans',
			serif: 'font-serif',
			mono: 'font-mono',
		},
	},
	defaultVariants: {
		variant: 'body-m',
		fontWeight: 'regular',
	},
});

type TypographyVariants = VariantProps<typeof typographyCVA>;

interface TypographyProps
	extends ComponentPropsWithRef<'p'>,
		TypographyVariants {
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'small';
}

export const Typography = ({
	variant,
	fontWeight: weight,
	fontStyle,
	className,
	fontFamily,
	as,
	...props
}: TypographyProps) => {
	const Component = as || 'p';
	1;

	return (
		<Component
			{...props}
			className={cn(
				typographyCVA({ fontFamily, variant, fontWeight: weight, fontStyle }),
				className
			)}
		/>
	);
};
