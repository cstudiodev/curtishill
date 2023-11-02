import React from 'react';
import { useState, useEffect } from 'react';
import { Element, Events, scrollSpy } from 'react-scroll';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Faq from './components/Faq';
import Footer from './components/Footer';

function App() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height'), 10);

  const handleScroll = () => {
    if (window.scrollY > headerHeight) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!isMobileMenuVisible);
  };

  useEffect(() => {
    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', (to, element) => {
      setActiveSection(to);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <div className='app'>
      <Header
        isSticky={isSticky}
        toggleMobileMenu={toggleMobileMenu}
        isMobileMenuVisible={isMobileMenuVisible}
      />
      <Element name="hero">
        <Hero activeSection={activeSection} />
      </Element>
      <Element name="services">
        <Services activeSection={activeSection} />
      </Element>
      <Element name="about">
        <About activeSection={activeSection} />
      </Element>
      <Element name="contact">
        <Contact activeSection={activeSection} />
      </Element>
      <Element name="faq">
        <Faq activeSection={activeSection} />
      </Element>
      <Footer/>
    </div>
  );
}

export default App;
