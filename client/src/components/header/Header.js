import React, { useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.scss';
import logo from '../../assets/main-logo.png';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const headerNav = [
  {
    display: 'Home',
    path: '/',
  },
  {
    display: 'MyFavorites',
    path: '/favorites',
  },
  {
    display: 'Movies',
    path: '/movie',
  },
  {
    display: 'Shows',
    path: '/tv',
  },
  
  
];

const Header = () => {
  const navigate = useNavigate()

  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const [token, setToken] = useState(localStorage.getItem("jwt"));
  const [loggeduseremail] = useState(localStorage.getItem("loggeduser"))
  const [loggeduser,setLogedduser] = useState()
  const active = headerNav.findIndex((e) => e.path === pathname);
  const logoutHandler = () => {
    localStorage.removeItem("jwt")
    window.location.reload()
  }
  const loginHandler = () => {
    navigate('/login')
  }
  useEffect(() => {
    axios.get(`http://localhost:8000/api/users/loggeduser?email=${loggeduseremail}`).then(res=>{setLogedduser(res.data.user)})
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add('shrink');
      } else {
        headerRef.current.classList.remove('shrink');
      }
    };
    window.addEventListener('scroll', shrinkHeader);
    return () => {
      window.removeEventListener('scroll', shrinkHeader);
    };
  }, []);

  return (
    <div ref={headerRef} className='header'>
      <div className='header__wrap container'>
        <div className='logo'>
          <img src={logo} alt='MyMovies' />
          <Link to='/'>MyMovies</Link>
        </div>
        <ul className='header__nav'>
          {headerNav.map((e, i) => (
            <li key={i} className={`${i === active ? 'active' : ''}`}>
              <Link to={e.path}>{e.display}</Link>
            </li>
          ))}
            {token ==null ?<li className='signout' onClick={loginHandler}>Login
            </li>:<l1 >{loggeduser?.name}</l1>}

            {token !==null ?<li className='signout' onClick={logoutHandler}>Logout
             <i style={{marginLeft:"7px"}} class="bi bi-box-arrow-right"></i>
            </li>:null}
        </ul>
      </div>
    </div>
  );
};

export default Header;
