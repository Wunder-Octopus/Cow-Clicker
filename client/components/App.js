import React, {useEffect, useState} from 'react';
import {LoginPage} from './Login'
import { Game } from './Game';


//main div, highest component
//login screen
function App(props) {
	const [LoggedIn, toggleLoggedIn ] = useState(false);

	//this function will be passed down as a prop into <LoginPage />
	//so when the user clicks on submit/login, the state variable "LoggedIn" will get procced to true here
	function loginHandler(e) {
		toggleLoggedIn(true);
	}

	//useEffect basically means that it will rerender depending on the dependency we passed in as the second parameter
	//in this case we passed in the state variable LoggedIn, which means that anytime the LoggedIn state is changed
	//this component (App) will rerender
	useEffect(() => {
		console.log("Logged In State: ", LoggedIn)
	}, [LoggedIn])

	
	return (
		<>
		{LoggedIn ? <Game /> : <LoginPage loginHandler={loginHandler} />}
		</>
	);
};

export default App;