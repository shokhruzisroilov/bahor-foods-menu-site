import { Categories, Header, Search } from './components'
import ProductItem from './components/ProductItem'

const App = () => {
	return (
		<>
			<Header />
			<div className='py-5 px-4'>
				<Search />
				<Categories />
				<h2 className='font-normal text-[14px] text-left tracking-[0%]'>
					Hammasi
				</h2>
				<div className='pt-5 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
					<ProductItem />
					<ProductItem />
					<ProductItem />
					<ProductItem />
					<ProductItem />
					<ProductItem />
					<ProductItem />
					<ProductItem />
					<ProductItem />
					<ProductItem />
				</div>
			</div>
		</>
	)
}

export default App
