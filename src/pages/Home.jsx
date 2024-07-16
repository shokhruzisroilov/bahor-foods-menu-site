import React, { useEffect, useState } from 'react'
import { categories } from '../utils/categories'
import ProductItem from '../components/ProductItem'
import FoodsService from '../services/foodsServices'

const Home = () => {
	const [foodsData, setFoodsData] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	const getFoods = async () => {
		try {
			const data = await FoodsService.getFoods()
			if (Array.isArray(data)) {
				setFoodsData(data)
			} else {
				console.error('Data is not in expected format:', data)
			}
		} catch (err) {
			setError(err.message || 'Failed to fetch foods')
		} finally {
			setLoading(false)
		}
	}
	useEffect(() => {
		getFoods()
	}, [])

	if (loading) {
		return (
			<div className='min-h-screen flex items-center justify-center'>
				<div
					className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-red-500 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
					role='status'
				>
					<span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
						Loading...
					</span>
				</div>
			</div>
		)
	}

	if (error) {
		return (
			<div className='min-h-screen flex items-center justify-center'>
				Error: {error}
			</div>
		)
	}

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
									key={filteredFood._id}
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
