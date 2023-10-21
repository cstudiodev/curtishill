import React from 'react';
import { Link } from 'react-scroll';
import MobileMenu from './MobileMenu';
import IconMenu from '../assets/IconMenu';
import IconClose from '../assets/IconClose';

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
            activeClass="link-active"
          >
          <div className='header-logo-container'>
            <h3 className='link'>cStudio</h3>
          </div>
        </Link>
        <ul className="header-nav">
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            activeClass="link-active"
          >
            <li className='link'>Services</li>
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            activeClass="link-active"
          >
            <li className='link'>About</li>
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            activeClass="link-active"
          >
            <li className='link'>Contact</li>
          </Link>
          <Link
            to="faq"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            activeClass="link-active"
          >
            <li className='link'>FAQ</li>
          </Link>
        </ul>
        <button className="btn header-cta-btn btn-lg">Hire</button>
        <button
          className="icon-btn mobile-menu-btn"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuVisible ? <IconClose /> : <IconMenu />}
        </button>
      </div>
      {isMobileMenuVisible && <MobileMenu />}
    </header>
  );
};

export default Header;
