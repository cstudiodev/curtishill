import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section className='section-hero'>
      <div className='hero-content'>
        <div className='hero-heading'>
          <h1>Shopify Expert</h1>
          <h1>Ecommerce Developer</h1>
          <h1>Web Design</h1>
          <h1>UI/UX</h1>
        </div>
          <Link to="services" spy={true} smooth={true} offset={-100} duration={500}>
            <button className='next-section-button'>
              D
            </button>
          </Link>
      </div>
    </section>
  )
}

export default Hero