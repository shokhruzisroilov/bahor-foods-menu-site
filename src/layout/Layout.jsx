import React from 'react'
import { Categories, Header, Search } from '../components'
import { Outlet } from 'react-router-dom'

const Layout = () => {
	return (
		<>
			<Header />
			<Search />
			<Categories />
			<Outlet />
		</>
	)
}

export default Layout
