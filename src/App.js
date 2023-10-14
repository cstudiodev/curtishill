import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';

function App() {
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!isMobileMenuVisible);
  };  

  return (
    <div className='app'>
      <Header toggleMobileMenu={toggleMobileMenu} isMobileMenuVisible={isMobileMenuVisible} />
      <Hero />
      <Services />
    </div>
  );
}

export default App;

