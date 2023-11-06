import React from 'react'
import IconEmail from '../assets/IconEmail'
import IconLinkedin from '../assets/IconLinkedin'
import IconGithub from '../assets/IconGithub'

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
            <p className='contact-text'>If you're interested in discussing a project or simply want to connect, you can email me directly, connect with me on LinkedIn, or explore my past work and contributions on GitHub. I look forward to the opportunity to collaborate!</p>
          </div>
        </div>
      </section>
      <section className='section alt-bg'>
        <div className='section-content'>
          <div className='contact-container'>
            <div className='contact-card'>
              <IconEmail />
              <a href="mailto:curtis@cstudio.ca">curtis@cstudio.ca</a>
            </div>
            <div className='contact-card'>
              <IconLinkedin />
              <a href="https://www.linkedin.com/in/cstudiodev" target="_blank" rel="noopener noreferrer">Visit LinkedIn</a>
            </div>
            <div className='contact-card'>
              <IconGithub />
              <a href="https://github.com/cstudiodev" target="_blank" rel="noopener noreferrer">Visit GitHub</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
