import React, { useState, useEffect } from 'react';
import './styles/Login.css'

export function LoginPage(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    //saves the username
    function handleClick(event) {
        console.log("USERNAME:", username)
        console.log("PASSWORD:", password)
        setUsername('')
        setPassword('')
    }

    function handlePress(event) {
        if (event.key === 'Enter') {
            console.log("USERNAME:", username)
            console.log("PASSWORD:", password)
            setUsername('')
            setPassword('')
        } 
    }


    return (
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
    )

}