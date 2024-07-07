import { categoriesData } from '../utils/categoriesData'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const Categories = () => {
	const activeClazz = 'bg-[#FED718] '
	const clazz = 'bg-white border-[1px] border-solid border-[#FED718]'
	return (
		<div className='py-5'>
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
						<button
							className={`w-full h-[35px] rounded-[10px] text-black font-normal text-[12px] leading-[18px] tracking-[0%] ${
								item.fil === 'all' ? activeClazz : clazz
							}`}
						>
							{item.name}
						</button>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default Categories
