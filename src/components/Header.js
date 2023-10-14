import React from 'react'

const Header = () => {
  return (
    <header className='header'>
      <div className='header-content'>
        <h3 className='header-logo link'>
          cStudio
        </h3>
        <ul className='header-nav'>
          <li className='link'>About</li>
          <li className='link'>Contact</li>
          <li className='link'>FAQ</li>
        </ul>
        <button className='header-cta cta-button'>
          Hire
        </button>
      </div>
    </header>
  )
}

export default Header