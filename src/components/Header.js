import React from 'react';
import MobileMenu from './MobileMenu';

const Header = ({ toggleMobileMenu, isMobileMenuVisible }) => {
  return (
    <header className='header'>
      <div className='header-content'>
        <h3 className='link'>
          cStudio
        </h3>
        <ul className='header-nav'>
          <li className='link'>About</li>
          <li className='link'>Contact</li>
          <li className='link'>FAQ</li>
        </ul>
        <button className='header-cta-button'>
          HIRE
        </button>
        <button className='mobile-menu-button' onClick={toggleMobileMenu}>
          {isMobileMenuVisible ? 'X' : 'M'}
        </button>
      </div>
      {isMobileMenuVisible && <MobileMenu />}
    </header>
  );
}

export default Header;