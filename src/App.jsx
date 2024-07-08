import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import { Drinks, Foods, Home, Salads, Shashliks } from './pages'

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='/foods' element={<Foods />} />
				<Route path='/drinks' element={<Drinks />} />
				<Route path='/salads' element={<Salads />} />
				<Route path='/shashliks' element={<Shashliks />} />
			</Route>
		</Routes>
	)
}

export default App
