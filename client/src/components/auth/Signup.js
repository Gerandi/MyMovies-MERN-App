import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";

import PageHeader from '../page-header/PageHeader';
import logo from '../../assets/main-logo.png';
import './Signup.scss';

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
        <>
            <PageHeader>
                Register
            </PageHeader>

            <div className='signup-page'>
                <div className='signup-left'>
                        <div className='logo'>
                            <img src={logo} alt='MyMovies' />
                            <Link to='/'>MyMovies</Link>
                        </div><br></br>
                        <h3>The best Movie Database App for you</h3>
                        <p>Please register to start using our service.</p>
                </div>
                <div className='signup-right'>
                    <div className='signup-right-gradient'>
                        <div className='register-container'>
                            <h1>Register</h1>
                            <label>Username:</label>
                            <input className='inputforms' type='text' onChange={(e) => { setUsername(e.target.value) }} placeholder="Enter your username" />
                            <label>Name:</label>
                            <input className='inputforms' type='text' onChange={(e) => { setFullName(e.target.value) }} placeholder="Enter your full name" />
                            <label>Email:</label>
                            <input className='inputforms' type='text' onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter your email" />
                            <label>Password:</label>
                            <input className='inputforms' type='password' onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter your password" />
                            <label>Confirm Password:</label>
                            <input className='inputforms' type='password' onChange={(e) => { setConfirmPassword(e.target.value) }} placeholder="Confirm your password" />
                            <p>Do you already have an account?<a className='rg-here' href='/login'>Login here</a>.</p>
                            <button onClick={registerHandler} class="register-btn">Signup</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
