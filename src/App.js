import React from 'react'
//components and pages
import Home from './pages/Home'
//GlobalStyle
import GlobalStyle from './components/GlobalStyle'
import { Route } from 'react-router-dom'

const App = () => {
	return (
		<div>
			<GlobalStyle />
			<Route path={['/games/:id', '/']}>
				<Home />
			</Route>
		</div>
	)
}

export default App
