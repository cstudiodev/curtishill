import React, { useState } from 'react';
import IconClose from '../assets/IconClose'

const Footer = () => {
  const [visibleTooltip, setVisibleTooltip] = useState(null);

  const legalInfo = [
    { 
      name: 'Privacy Notice', 
      tooltip: 'Coming soon...' 
    },
    { 
      name: 'Terms of Use', 
      tooltip: 'Coming soon...'
    }
  ];
  

  const handleTooltip = (index) => {
    setVisibleTooltip(index === visibleTooltip ? null : index);
  };
  return (
    <footer className='section alt-bg'>
      <div className='section-content'>
        <div className='footer-content'>
          <p className='footer-copyright-text'>© 2023 Hill & Co Consulting Inc.</p>
          <ul className='footer-nav'>
          {legalInfo.map((info, index) => (
            <div key={index}>
              <li className='link' onClick={() => handleTooltip(index)}>
                {info.name}
              </li>
              {visibleTooltip === index && (
                <div className='tooltip-popup legal-popup'>
                  <p className='tooltip-content'>
                    <div className='tooltip-close' onClick={() => handleTooltip(null)}>
                      <IconClose />
                    </div>
                    {info.tooltip}
                  </p>
                </div>
              )}
            </div>
          ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer