import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import IconDown from '../assets/IconDown';

const Hero = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const rootStyle = window.getComputedStyle(document.documentElement);
    const offsetValue = parseInt(rootStyle.getPropertyValue('--header-height').trim()) * -1;
    setOffset(offsetValue);
  }, []);

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
          <Link to="services" spy={true} smooth={true} offset={offset} duration={500}>
            <button className="icon-btn hero-btn">
              <IconDown />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero;
