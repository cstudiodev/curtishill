import React from 'react'

const Contact = ({ activeSection }) => {
  return (
    <section id="contact" className='section'>
      <div className='section-content'>
        <div className='section-heading'>
          <h2 className={`${activeSection === 'contact' ? 'heading-active' : ''}`}>
            Let's Talk
          </h2>
        </div>
        <div className='contact-form'>
          FORM
        </div>
      </div>
    </section>
  )
}

export default Contact