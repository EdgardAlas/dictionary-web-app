import { cn } from '@/lib/cn';
import { ComponentProps } from 'react';

export const Switch = ({ ...props }: ComponentProps<'input'>) => {
	return (
		<label
			htmlFor={props.id}
			className={cn(
				'relative inline-block h-5 w-10 cursor-pointer rounded-full bg-theme-gray-300 transition-colors has-[:checked]:bg-theme-purple-100'
			)}
		>
			<span className='sr-only'>{props.name}</span>
			<input type='checkbox' className='peer sr-only' {...props}></input>
			<span className='absolute left-[0.1875rem] top-1/2 inline-block h-[14px] w-[14px] -translate-y-1/2 rounded-full bg-white transition-[left] peer-checked:left-[1.4375rem]' />
		</label>
	);
};
