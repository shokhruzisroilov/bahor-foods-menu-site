import { ProductItem } from '../components'
import { allFoodsData } from '../utils/allFoodsData'

const Foods = () => {
	return (
		<div className='px-4'>
			<h2
				className='font-normal text-[14px] text-left tracking-[0%]'
				id='foods'
			>
				Taomlar
			</h2>
			<div className='py-5 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
				{allFoodsData &&
					allFoodsData.map(item => {
						return (
							item.filter === 'foods' && (
								<ProductItem
									key={item.id}
									name={item.name}
									img={item.img}
									price={item.price}
								/>
							)
						)
					})}
			</div>
		</div>
	)
}

export default Foods
