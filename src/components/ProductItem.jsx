import React from 'react'

const ProductItem = () => {
	return (
		<div className='px-2 py-3 border-[1px] border-solid border-[#FED718] cursor-pointer hover:shadow-lg'>
			<img
				src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMAo0pc8gpyeMi4g7-GDl49XMD5_On9UJWSA&s'
				alt='product image'
				className='rounded-[10px] bg-white w-full'
			/>
			<h3 className='pt-3 text-base font-normal leading-[18px] tracking-[0%] text-center'>
				Shashlik
			</h3>
			<p className='pt-1 text-[14px] font-normal leading-[18px] tracking-[0%] text-center'>
				50.000 so'm
			</p>
		</div>
	)
}

export default ProductItem
