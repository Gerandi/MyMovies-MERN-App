// todo
import React from 'react';
import { useState } from 'react';
import './Login.scss'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState();
    const user = {
        email,
        password
    }
    const LoginHandle = () => {
        axios.post('http://localhost:8000/api/users/login', user).then(res => {localStorage.setItem('jwt', '124q3cdfgdraw3q244444w555cfgudtse57w34s5eu8cfise58');localStorage.setItem('loggeduser',email); navigate("/");window.location.reload()})
    }
    return (
        <div className='login-container'>
            <h1>Login</h1>
            <br></br>
            <label>Email :<input className='inputforms' type='text' onChange={(e) => { setEmail(e.target.value) }} ></input></label>
            <label>Password :<input className='inputforms' type='password' onChange={(e) => { setPassword(e.target.value) }} ></input></label>
            <p style={{ marginTop: "3em" }}>Not a user? No problem you can <a className='rg-here' href='/register'>register here</a> </p>
            <br></br>
            <button onClick={LoginHandle} class="btn">Login</button>
        </div>
    );
};

export default Login;