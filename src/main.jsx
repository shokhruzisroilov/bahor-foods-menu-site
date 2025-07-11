import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
// src/index.js yoki App.js faylida import qiling
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<HashRouter>
			<App />
		</HashRouter>
	</React.StrictMode>
)
