import React, {useEffect, useState} from 'react';
import {LoginPage} from './Login'
import { Game } from './Game';
import { connect, useStore, useDispatch } from 'react-redux';
import {loadGameActionCreator} from '../actions/actions.js';

//main div, highest component
//login screen
function App(props) {
	const [LoggedIn, toggleLoggedIn ] = useState(false);
	const [attached, setAttach] = useState(false);
	const [username, setUsername] = useState('');
	const dispatch = useDispatch();


	//this function will be passed down as a prop into <LoginPage />
	//so when the user clicks on submit/login, the state variable "LoggedIn" will get procced to true here
	function loginHandler(username) {
		setUsername(username);
		toggleLoggedIn(true);
	}


	//useEffect basically means that it will rerender depending on the dependency we passed in as the second parameter
	//in this case we passed in the state variable LoggedIn, which means that anytime the LoggedIn state is changed
	//this component (App) will rerender
	useEffect(() => {
		if (LoggedIn) {
			let url = `/api/savegame/${username}`
			fetch(url, {
				method: 'GET',
				headers: {
					'Accept': "application/json, text/plain, */*",
					'Content-Type': 'application/json',
				  },
			})
				.then((response) => {
				return response.json();
			}).then((data)=> {
				dispatch(loadGameActionCreator(data))
			})
		}
	}, [LoggedIn])

	useEffect(() => console.log("PROPS", username, props.savedState), [props, username])
	

	// useEffect(() => {
	// 	return () => {
	
	// 	   window.addEventListener("beforeunload", function(e) {
	// 		saveGameHandler();
	// 		console.log("SAVED GAME IN REACT COMPONENT")
	// 		return;
		
	// 	});
	//    }
	   
	//   });

	//saves the game to db
	function saveGameHandler() {
		const reqBody = props.savedState;
		reqBody.username = username;

		fetch('/api/savegame', {
			method: 'POST',
            headers: {
                'Accept': "application/json, text/plain",
                'Content-Type': 'application/json',
                'x-Trigger': 'CORS'
              },
              body: JSON.stringify(reqBody)
		})
		.then((res) => {
			console.log(res)
		})
	}

	//loads game FROM db
	function loadGameHandler() {
		let url = `/api/savegame/${username}`
		fetch(url, {
			method: 'GET',
            headers: {
                'Accept': "application/json, text/plain, */*",
                'Content-Type': 'application/json',
              },
		})
			.then((response) => {
			return response.json();
		}).then((data)=> {
			dispatch(loadGameActionCreator(data))
		})
	}

	//check if state authentication returns true, if yes, render game, otherwise render login page
	return (
		<>
		<div className="saveGameContainer">
			<button onClick={saveGameHandler} id="saveGame">Save</button>
		</div>
		{LoggedIn ? <Game /> : <LoginPage loginHandler={loginHandler} />}
		</>
	);
};


const mapStateToProps = function(state) {
    return {
       savedState: state.cows
    }
}

export default connect(mapStateToProps, null) (App);