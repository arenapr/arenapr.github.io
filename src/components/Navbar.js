import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Hamburguer from 'hamburger-react'
import './Navbar.css'
import { Button } from './Button'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960)
    {
      setButton(false);
    }
    else
    {
      setButton(true);
      closeMobileMenu();
    }
  };

  useEffect(() => {
    showButton()
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
            PROJECT ARENA
          </Link>
          <div className='menu-icon'>
            <Hamburguer toggled={click} toggle={setClick} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <Link to='/about' className='nav-links about-link' onClick={closeMobileMenu}>
                    ABOUT
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/blog' className='nav-links blog-link' onClick={closeMobileMenu}>
                    BLOG
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/contact-us' className='nav-links-mobile' onClick={closeMobileMenu}>
                    CONTACT US
                </Link>
            </li>
          </ul>
          {button && <Button type='contact-us' buttonStyle='btn--primary'>CONTACT US</Button>}
        </div>
      </nav>
    </>
  )
}

export default Navbar
