import React from 'react';
import { Link } from 'react-scroll';

const MobileMenu = ({ toggleMobileMenu }) => {
  return (
    <div className='mobile-menu'>
      <Link
        to="hero"
        spy={true}
        smooth={true}
        offset={-80}
        onClick={toggleMobileMenu}
      >
        <h3 className='link'>
          cStudio
        </h3>
      </Link>
      <ul className='mobile-nav'>
        <Link 
          to="services" 
          spy={true} 
          smooth={true} 
          offset={-80}
          onClick={toggleMobileMenu}
        >
          <li className='link'>Services</li>
        </Link>
        <Link 
          to="about" 
          spy={true} 
          smooth={true} 
          offset={-80}
          onClick={toggleMobileMenu}
        >
          <li className='link'>About</li>
        </Link>
        <Link 
          to="contact" 
          spy={true} 
          smooth={true} 
          offset={-80}
          onClick={toggleMobileMenu}
        >
          <li className='link'>Contact</li>
        </Link>
        <Link 
          to="faq" 
          spy={true} 
          smooth={true} 
          offset={-80}
          onClick={toggleMobileMenu}
        >
          <li className='link'>FAQ</li>
        </Link>
      </ul>
      <button className='btn btn-lg'>HIRE</button>
    </div>
  )
}

export default MobileMenu;


