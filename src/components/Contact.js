import React from 'react'
import IconBadge from '../assets/IconBadge'

const Contact = ({ activeSection }) => {

  return (
    <>
      <section id="contact" className='section'>
        <div className='section-content'>
          <div className='section-heading'>
            <h2 className={`${activeSection === 'contact' ? 'heading-active' : ''}`}>
              Let's Talk
            </h2>
          </div>
          <div className='contact-text-section'>
            <p className='contact-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </section>
      <section className='section alt-bg'>
        <div className='section-content'>
          <div className='contact-container'>
            <div className='contact-card'>
              <IconBadge />
              <h4>Email</h4>
              <p>curtis@cstudio.ca</p>
            </div>
            <div className='contact-card'>
              <IconBadge />
              <h4>Phone</h4>
              <p>+1 234-5678-9012</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
