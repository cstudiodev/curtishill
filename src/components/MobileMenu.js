import React from 'react';

const MobileMenu = () => {
  return (
    <div className='mobile-menu'>
      <h3 className='link'>
        cStudio
      </h3>
      <ul className='mobile-nav'>
        <li className='link'>About</li>
        <li className='link'>Contact</li>
        <li className='link'>FAQ</li>
      </ul>
      <button className='mobile-cta-button'>
        HIRE
      </button>
    </div>
  )
}

export default MobileMenu