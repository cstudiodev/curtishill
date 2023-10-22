import React from 'react';
import { Link } from 'react-scroll';
import IconDown from '../assets/IconDown';

const Hero = () => {
  return (
    <section className='hero-section'>
      <div className='hero-content'>
        <div className='hero-heading'>
          <h1>Shopify Expert</h1>
          <h1>Ecommerce Developer</h1>
          <h1>Web Design</h1>
          <h1>UI/UX</h1>
        </div>
        <div className='hero-btn-container'>
          <Link to="services" spy={true} smooth={true} offset={-100} duration={500}>
            <button className="icon-btn hero-btn">
              <IconDown />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero