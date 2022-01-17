import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './Login'
import Register from './Register'

const AppAuth = () => {
	return (
		<div>
			<BrowserRouter>
				<Route path="/login" exact component={Login} />
				<Route path="/register" exact component={Register} />
			</BrowserRouter>
		</div>
	)
}

export default AppAuth