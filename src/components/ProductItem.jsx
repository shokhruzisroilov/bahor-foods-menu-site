import React from 'react'

const ProductItem = ({ filteredFood }) => {
	return (
		<div className='food-item bg-white shadow-xl rounded-lg overflow-hidden w-full max-w-sm mx-auto mb-6 transition-transform transform hover:scale-105 border-[1px] border-[#deab5d26] hover:border-[1px] hover:border-[#deab5d]'>
			<img
				src={filteredFood.img}
				alt={filteredFood.name}
				className='w-full h-[150px] object-cover'
				onError={e => {
					e.target.src = 'https://via.placeholder.com/150'
				}}
			/>
			<div className='max-sx:p-4 p-6'>
				<h2 className='text-lg max-sx:text-base font-bold font-merriweather text-gray-800 mb-2'>
					{filteredFood.name}
				</h2>
				<p className='text-md font-semibold font-merriweather text-gray-600'>
					{filteredFood.price}
				</p>
				{filteredFood.category === 'salad' && (
					<p className='text-xs font-semibold font-merriweather text-gray-600 mt-2'>
						Тайёр бўлиши: 15 мин
					</p>
				)}
				{filteredFood.category === 'dish' && (
					<p className='text-xs font-semibold font-merriweather text-gray-600 mt-2'>
						Тайёр бўлиши: 30 мин
					</p>
				)}
				{filteredFood.category === 'food' && (
					<p className='text-xs font-semibold font-merriweather text-gray-600 mt-2'>
						Тайёр бўлиши: 30 мин
					</p>
				)}
			</div>
		</div>
	)
}

export default ProductItem
