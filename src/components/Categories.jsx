import { categoriesData } from '../utils/categoriesData'

import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper/modules'

const Categories = () => {
	return (
		<div className='py-5'>
			<ul className='flex justify-center gap-[10px]'>
				<Swiper
					slidesPerView={4}
					centeredSlides={true}
					spaceBetween={80}
					grabCursor={true}
					pagination={{
						clickable: true,
					}}
					// modules={[Pagination]}
					className='mySwiper'
				>
					{categoriesData.map(item => {
						return (
							<SwiperSlide>
								<li key={item.id}>
									<button className='w-[88px] h-[35px] bg-[#FED718] rounded-[10px] text-black font-normal text-[12px] leading-[18px] tracking-[0%]'>
										{item.name}
									</button>
								</li>
							</SwiperSlide>
						)
					})}
				</Swiper>
			</ul>
		</div>
	)
}

export default Categories
