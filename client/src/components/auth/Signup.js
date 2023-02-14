import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const Signup = () => {
    const navigate = useNavigate();
    const [name, setUsername] = useState("");
    const [fullname, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(); 
    const [confirmPassword, setConfirmPassword] = useState(); 
    const user = {
        name,
        fullname,
        email,
        password,
        confirmPassword,
    }
    const registerHandler = () => {
        axios.post("http://localhost:8000/api/users/register",user).then(res=>navigate('/login'))
        .catch(err=>console.log(err))
    }
    return (
        <div className='login-container'>
            <h1>Register</h1>
            <label>Username :<input className='inputforms' type='text' onChange={(e) => { setUsername(e.target.value) }} ></input></label>
            <label>Full Name :<input className='inputforms' type='text' onChange={(e) => { setFullName(e.target.value) }} ></input></label>
            <label>Email :<input className='inputforms' type='text' onChange={(e) => { setEmail(e.target.value) }} ></input></label>
            <label>Password :<input className='inputforms' type='password' onChange={(e) => { setPassword(e.target.value) }} ></input></label>
            <label>Confirm Password :<input className='inputforms' type='password' onChange={(e) => { setConfirmPassword(e.target.value) }} ></input></label>
            <button onClick={registerHandler} class="btn">Signup</button>
        </div>
    );
};

export default Signup;