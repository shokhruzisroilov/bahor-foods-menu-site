import React from 'react'

const LoadingScreen = () => {
	return (
		<div className='min-h-screen flex flex-col items-center justify-center bg-white'>
			<div className='loading-text'>Баҳор ресторанни</div>
			<div className='loader'></div>
			<div className='text-xl font-bold text-[#deab5d] mt-4'>Loading...</div>
		</div>
	)
}

export default LoadingScreen
