import React, { useState, useEffect } from 'react';
import './styles/Login.css'
import background from "./assets/cloudsbackground.jpg";

export function LoginPage(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    //deconstruct the props
    const { loginHandler } = props;

    //saves the username
    function handleClick(event) {
        console.log("USERNAME:", username)
        console.log("PASSWORD:", password)
        //fetch request in here
        // fetch('login', {
        //     method: 'POST',
        //     credentials: 'include',
        //     headers: {
        //         'Accept': "application/json, text/plain",
        //         'Content-Type': 'application/json',
        //         'x-Trigger': 'CORS'

        //       },
        //       body: JSON.stringify({username: username, password: password})
        // })
        //     .then((res) => {
        //         //what to do with response?

        //         //empty the input fields
        //         setUsername('')
        //         setPassword('')
        //     })

        //TEMPOARY LOGIN FUNCTION VVV
        if (username === 'lisa' && password == '1234') loginHandler();  
    }

    //send user and pw after enter
    function handlePress(event) {
        if (event.key === 'Enter') {
            console.log("USERNAME:", username)
            console.log("PASSWORD:", password)
            setUsername('')
            setPassword('')
        } 
    }


    return (
        //login div
        <div className="main">
            <div className="LoginDiv">
                <h2>Login</h2>
                <div className="LoginForm">
                    <label>Username: </label>
                    <input type="text" className="username" value={username} onChange={(e) => {setUsername(e.target.value)}} required/>
                    <label>Password: </label>
                    <input type="password" className="password" value={password} onChange={(e) => {setPassword(e.target.value)}} onKeyUpCapture={handlePress} required/>
                </div>
                <div className="loginSubmitContainer">
                <input type="submit" onClick={handleClick} className="loginButton"/>
                </div>
            </div>
        </div>
    )

}