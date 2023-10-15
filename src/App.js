import React from 'react';
import { useState } from 'react';
import { Element } from 'react-scroll';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!isMobileMenuVisible);
  };

  return (
    <div className='app'>
      <Header
        isSticky={isSticky}
        toggleMobileMenu={toggleMobileMenu}
        isMobileMenuVisible={isMobileMenuVisible}
      />
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="services">
        <Services />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
}


export default App;

