import React from 'react';

const Loading = () => {
	return (
		<div>
			<div className='inline-flex w-full items-center justify-center'>
				<div className='h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-theme-purple-100' />
			</div>
		</div>
	);
};

export default Loading;
