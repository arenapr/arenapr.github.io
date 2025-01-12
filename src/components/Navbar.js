import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Hamburguer from 'hamburger-react';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
      closeMobileMenu();
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const navigate = useNavigate();

  const scrollToHomeAbout = () => {
    navigate('/', { state: { scrollPosition: '#home-about' } })
  };

  const scrollToHomeContactUs= () => {
    navigate('/', { state: { scrollPosition: '#home-contact-us' } })
  };

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
            <img src='/images/ARENA-03.png' width={50} height={50} alt='Arena Logo' />
          </Link>
          <div className='menu-icon'>
            <Hamburguer toggled={click} toggle={setClick} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links home-link' onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links about-link'
                onClick={(e) => {
                  e.preventDefault();
                  closeMobileMenu();
                  scrollToHomeAbout();
                }}
              >
                ABOUT
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/blog' className='nav-links blog-link' onClick={closeMobileMenu}>
                BLOG
              </Link>
            </li>
            <li className='nav-item'>
              <Link 
              to='/'
                className='nav-links-mobile'
                onClick={(e) => {
                  e.preventDefault();
                  closeMobileMenu();
                  scrollToHomeContactUs();
                }}
              >
                CONTACT US
              </Link>
            </li>
          </ul>
          {button && <Button type='contact-us' buttonStyle='btn--primary'>CONTACT US</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;