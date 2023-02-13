import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';
import bg from '../../assets/footer-background.jpg';
import logo from '../../assets/main-logo.png';

const Footer = () => {
  return (
    <div className='footer' style={{ backgroundImage: `url(${bg})` }}>
      <div className='footer__content container'>
        <div className='footer__content__logo'>
          <div className='logo'>
            <img src={logo} alt='mymovies' />
            <Link to='/'>MyMovies</Link>
          </div>
        </div>
        <div className='footer__content__menus'>
          <div className='footer__content__menu'>
            <Link to='/'>Home</Link>
            <Link to='/movie'>Movies</Link>
            <Link to='/tv'>TV Shows</Link>
          </div>
          <div className='footer__content__menu'>
            <Link to='/'>FAQ</Link>
            <Link to='/'>Terms of Service</Link>
            <Link to='/'>Privacy policy</Link>
          </div>
          <div className='footer__content__menu'>
            <Link to='/'>Gerandi Matraku</Link>
            <Link to='/'>Anxhelino</Link>
            <Link to='/'>Olvi Xhaferaj</Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
