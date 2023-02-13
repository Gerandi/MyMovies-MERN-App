import React from 'react';
import { useState } from 'react';
const Signup = () => {
    const [username, setUsername] = useState("");
    const [fullname, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState();
    return (
        <div className='login-container'>
            <h1>Register</h1>
            <label>Username :<input className='inputforms' type='text' onChange={(e) => { setUsername(e.target.value) }} ></input></label>
            <label>Full Name :<input className='inputforms' type='text' onChange={(e) => { setFullName(e.target.value) }} ></input></label>
            <label>Email :<input className='inputforms' type='text' onChange={(e) => { setEmail(e.target.value) }} ></input></label>
            <label>Password :<input className='inputforms' type='password' onChange={(e) => { setPassword(e.target.value) }} ></input></label>
            <button class="btn">Signup</button>
        </div>
    );
};

export default Signup;