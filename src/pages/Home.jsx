import React from 'react'
import { categories } from '../utils/categories'
import { foodsData } from '../utils/foodsData'
import ProductItem from '../components/ProductItem'

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
								<ProductItem
									key={filteredFood.id}
									filteredFood={filteredFood}
								/>
							))}
					</div>
				</div>
			))}
		</div>
	)
}

export default Home
