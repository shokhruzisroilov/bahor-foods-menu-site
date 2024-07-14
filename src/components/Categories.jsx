import { Link } from 'react-router-dom'
import { categories } from '../utils/categories'

const Categories = ({ activeCategory }) => {
	return (
		<nav className='fixed top-5 right-0 left-0 bg-white p-4 shadow-custom z-10'>
			<ul className='flex space-x-1'>
				{categories.map(category => (
					<li key={category.id}>
						<Link
							to={`/#${category.id}`}
							className={` ${
								activeCategory === category.id
									? 'py-3 px-6 bg-[#deab5d] rounded-[8px] text-base text-black font-merriweather'
									: 'py-3 px-6 bg-[#deab5d26] rounded-[8px] text-base text-black font-merriweather'
							}`}
						>
							{category.name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Categories
