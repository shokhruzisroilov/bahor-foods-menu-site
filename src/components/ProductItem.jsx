const ProductItem = ({ name, price, img }) => {
	return (
		<div className='px-2 py-3 border-[1px] border-solid border-[#FED718] cursor-pointer hover:shadow-lg'>
			<img
				src={img}
				className='rounded-[10px] bg-white w-full max-h-[150px] object-cover'
			/>
			<h3 className='pt-3 text-base font-normal leading-[18px] tracking-[0%] text-center'>
				{name}
			</h3>
			<p className='pt-1 text-[14px] font-normal leading-[18px] tracking-[0%] text-center'>
				{price} so'm
			</p>
		</div>
	)
}

export default ProductItem
