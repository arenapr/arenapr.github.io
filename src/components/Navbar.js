import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Hamburguer from 'hamburger-react';
import './Navbar.css';

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

  return (
    <>
      <nav className='navbar'>
        <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
          ARENA
        </Link>
        <div className='menu-icon'>
          <Hamburguer toggled={click} toggle={setClick} />
        </div>
        <ul className={click ? 'nav-links active' : 'nav-links'}>
          <li>
            <Link to='/' className='links-prop' onClick={closeMobileMenu}>
              HOME
            </Link>
          </li>
          <li>
            <Link to='/about' className='links-prop' onClick={closeMobileMenu}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link to='/blog' className='links-prop' onClick={closeMobileMenu}>
              BLOG
            </Link>
          </li>
          {/* <li>
            <Link to='/testimonials' className='links-prop' onClick={closeMobileMenu}>
              TESTIMONIALS
            </Link>
          </li> */}
          <li>
            <Link to='/contact-us' className='links-prop' onClick={closeMobileMenu}>
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;