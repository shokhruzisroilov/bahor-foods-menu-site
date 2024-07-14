import React from 'react'
import { categories } from '../utils/categories'
import { foodsData } from '../utils/foodsData'

const Home = () => {
	return (
		<div className='py-10'>
			{categories.map(category => (
				<div key={category.id} id={category.id} className='pt-[100px]'>
					<h2 className='pb-8 px-4 text-[#2b191] font-cormorant font-[800] text-2xl'>
						{category.name}
					</h2>
					<div className='foods-grid grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-4'>
						{foodsData
							.filter(food => food.category === category.id)
							.map(filteredFood => (
								<div
									key={filteredFood.id}
									className='food-item bg-white shadow-xl rounded-lg overflow-hidden w-full max-w-sm mx-auto mb-6 transition-transform transform hover:scale-105 border-[1px] border-[#deab5d26] hover:border-[1px] hover:border-[#deab5d]'
								>
									<img
										src={filteredFood.img}
										alt={filteredFood.name}
										className='w-full min-h-[150px] object-cover'
										onError={e => {
											e.target.src = 'https://via.placeholder.com/150'
										}}
									/>
									<div className='p-6'>
										<h2 className='text-lg font-bold font-merriweather text-gray-800 mb-2'>
											{filteredFood.name}
										</h2>
										<p className='text-md font-semibold font-merriweather text-gray-600'>
											{filteredFood.price}
										</p>
									</div>
								</div>
							))}
					</div>
				</div>
			))}
		</div>
	)
}

export default Home
