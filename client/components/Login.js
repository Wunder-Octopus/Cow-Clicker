import React, { useState, useEffect } from 'react';
import './styles/Login.css'
// import background from "./assets/cloudsbackground.jpg";

export function LoginPage(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    //sign up state here
    const [ signup , toggleSignUp] = useState(false);

    //deconstruct the props
    const { loginHandler } = props;

    //saves the username
    // (`/api/${event.target.value}`,
    function handleClick(event) {
        // console.log("USERNAME:", username)
        // console.log("PASSWORD:", password)\
        let action;
        if (signup) action = 'signup'
        else action = 'login'

        let url = '/api/' + action
        console.log(url)
        //TEMP
        //MOVE THIS INVOKATION AFTER LOGIN CONTROLLER IS CREATED
        fetch((url, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': "application/json, text/plain",
                'Content-Type': 'application/json',
                'x-Trigger': 'CORS'

              },
              body: JSON.stringify({username: username, password: password})
        })
            .then((res) => {
                console.log(res)
                loginHandler();
                return res;
                // if (res.status === 200 || res.status === 201) {
                //     loginHandler()
                //     console.log("hi")
                //     setUsername('')
                //     setPassword('')
                // }
                
            }))
            

    }



    //seperate the login and sign up modules

        return (
            <div className="main">
                <h1>Cow Clicker EXTREME 3.0 (v4.2)</h1>
                <h3>A Definitely Complete Video Game Experience</h3>
                <div className="LoginDiv">
                <h2 id="loginHeader">{signup ? 'Sign Up!' : 'MOOGIN'}</h2>
                <div className="LoginForm">
                    {/* <label>Username: </label> */}
                    <input type="text" placeholder="Username" className="username" value={username} onChange={(e) => {setUsername(e.target.value)}} required/>
                    {/* <label>Password: </label> */}
                    <input type="password" placeholder="Password" className="password" value={password} onChange={(e) => {setPassword(e.target.value)}} required/>
                </div>
                <div className="loginSubmitContainer">
                    <input type="submit" onClick={() => {handleClick()}} className="loginButton"/>
                </div>
               { signup ? <div><p>Already have an account?</p><button onClick={() => {toggleSignUp(false)}}>Return to Login</button></div> : <div className="signupToggle"> <p>Don't have an account?</p><button onClick={() => {toggleSignUp(true)}}>Sign Up</button></div>}
            </div>
        </div>
    )
}