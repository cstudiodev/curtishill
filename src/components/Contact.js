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
                <a href="mailto:curtis@cstudio.ca" className='contact-card'>
                    <IconEmail />
                    <span>curtis@cstudio.ca</span>
                </a>
                <a href="https://www.linkedin.com/in/cstudiodev" target="_blank" rel="noopener noreferrer" className='contact-card'>
                    <IconLinkedin />
                    <span>Visit LinkedIn ↗</span>
                </a>
                <a href="https://github.com/cstudiodev" target="_blank" rel="noopener noreferrer" className='contact-card'>
                    <IconGithub />
                    <span>Visit GitHub ↗</span>
                </a>
            </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
