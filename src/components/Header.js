import React from 'react';
import { Link } from 'react-scroll';
import MobileMenu from './MobileMenu';

const Header = ({ isSticky, toggleMobileMenu, isMobileMenuVisible }) => {
  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <div className="header-content">
        <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            activeClass="active"
          >
          <h3 className='link'>
            cStudio
          </h3>
        </Link>
        <ul className="header-nav">
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            activeClass="active"
          >
            <li className='link'>Services</li>
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            activeClass="active"
          >
            <li className='link'>About</li>
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            activeClass="active"
          >
            <li className='link'>Contact</li>
          </Link>
          <Link
            to="fAQ"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            activeClass="active"
          >
            <li className='link'>FAQ</li>
          </Link>
        </ul>
        <button className="header-cta-button">Hire</button>
        <button
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuVisible ? 'X' : 'M'}
        </button>
      </div>
      {isMobileMenuVisible && <MobileMenu />}
    </header>
  );
};

export default Header;
