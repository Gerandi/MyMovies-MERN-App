// todo
import React from 'react';
import { useState } from 'react';
import './Login.scss'
import axios from 'axios';
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState();
    const user = {
        username: username,
        password: password
    }
    const LoginHandle = () => {
        axios.post('http://localhost:8000/login', user).then(res => localStorage.setItem('jwt', '124q3cdfgdraw3q244444w555cfgudtse57w34s5eu8cfise58'))
    }
    return (
        <div className='login-container'>
            <h1>Login</h1>
            <br></br>
            <label>Username :<input className='inputforms' type='text' onChange={(e) => { setUsername(e.target.value) }} ></input></label>
            <label>Password :<input className='inputforms' type='password' onChange={(e) => { setPassword(e.target.value) }} ></input></label>
            <p style={{ marginTop: "3em" }}>Not a user? No problem you can <a className='rg-here' href='/register'>register here</a> </p>
            <br></br>
            <button onClick={LoginHandle} class="btn">Login</button>
        </div>
    );
};

export default Login;