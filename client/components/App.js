import React, {useState} from 'react';
import {LoginPage} from './Login'


//main div, highest component
//login screen
function App(props) {
	return (
		<div className="main">
			<LoginPage />
		</div>
	)
}

export default App;