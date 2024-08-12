// src/components/Footer.jsx
import React from 'react'

const Footer = () => {
	return (
		<footer className='bg-white text-black py-8'>
			<div className='container mx-auto text-center'>
				<h1 className='text-2xl font-bold mb-4 font-merriweather'>
					Bahor restoranni
				</h1>

				<p className='text-[14px] mb-2'>
					Манзил: Kаманди махалла бахор чойхона, Karshi
				</p>
				<p className='text-[14px] flex gap-5 items-center justify-center'>
					Телефонлар:{' '}
					<ul>
						<li>+998 (33) 961-08-88</li>
						{/* <li>+998 (33) 961-08-88</li>
						<li>+998 (33) 961-08-88</li> */}
					</ul>
				</p>
			</div>
		</footer>
	)
}

export default Footer
