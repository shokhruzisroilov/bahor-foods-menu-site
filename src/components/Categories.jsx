import { categoriesData } from '../utils/categoriesData'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
	const [activeLink, setActiveLink] = useState('')

	const activeClazz = 'bg-[#FED718]'
	const clazz = 'bg-white border-[1px] border-solid border-[#FED718]'
	return (
		<div className='py-5 pl-4'>
			<Swiper
				slidesPerView={4}
				spaceBetween={10}
				centeredSlides={false}
				breakpoints={{
					768: {
						slidesPerView: categoriesData.length,
						spaceBetween: 10,
					},
				}}
				className='mySwiper'
			>
				{categoriesData.map(item => (
					<SwiperSlide key={item.id}>
						<Link to={`/${item.fil}`} onClick={() => setActiveLink(item.fil)}>
							<button
								className={`w-full h-[35px] rounded-[10px] text-black font-normal text-[12px] leading-[18px] tracking-[0%] ${
									activeLink === item.fil ? activeClazz : clazz
								}`}
							>
								{item.name}
							</button>
						</Link>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default Categories
