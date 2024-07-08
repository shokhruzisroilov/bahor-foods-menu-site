import { useState } from 'react'
import { searchIcon } from '../assets'

const Search = () => {
	const [search, setSearch] = useState('')
	return (
		<div className='px-4 pt-5'>
			<div className='relative flex justify-between items-center w-full h-[50px] border-[1px] border-[#989898] rounded-[16px]'>
				<input
					type='text'
					placeholder='Qidirish...'
					className='w-full h-full font-normal text-[14px] rounded-[16px] pl-4 outline-none'
					onChange={e => setSearch(e.target.value)}
				/>
				<div className='absolute right-4 cursor-pointer'>
					<img src={searchIcon} alt='search icon' className='w-6 h-6' />
				</div>
			</div>
		</div>
	)
}

export default Search
