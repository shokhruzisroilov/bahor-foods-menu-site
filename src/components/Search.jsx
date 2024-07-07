import { searchIcon } from '../assets'

const Search = () => {
	return (
		<>
			<div className='relative flex justify-between items-center w-full h-[50px] border-[1px] border-[#989898] rounded-[16px]'>
				<input
					type='text'
					placeholder='Qidirish...'
					className='w-full h-full font-normal text-[12px] rounded-[16px] pl-4 outline-none'
				/>
				<div className='absolute right-4 cursor-pointer'>
					<img src={searchIcon} alt='search icon' className='w-6 h-6' />
				</div>
			</div>
		</>
	)
}

export default Search
