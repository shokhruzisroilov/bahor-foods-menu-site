import { Categories, Header, Search } from './components'

const App = () => {
	return (
		<>
			<Header />
			<div className='px-4 py-5'>
				<Search />
				<Categories />
			</div>
		</>
	)
}

export default App
