import React from 'react'

const Services = ({ activeSection }) => {
  return (
    <section id="services" className='section'>
      <div className='section-content'>
        <div className='section-heading'>
          <h2 className={`${activeSection === 'services' ? 'heading-active' : ''}`}>
            How I Can Help You
          </h2>
        </div>
        <div className='services-card-container'>
          <p className='services-card'>Planning & Consulting</p>
          <p className='services-card'>Web Design</p>
          <p className='services-card'>UI/UX Design</p>
          <p className='services-card'>Shopify 1.0</p>
          <p className='services-card'>Shopify 2.0</p>
          <p className='services-card'>Shopify Plus</p>
          <p className='services-card'>New Store Builds</p>
          <p className='services-card'>Store Migrations</p>
          <p className='services-card'>Customizations</p>
          <p className='services-card'>Theme Setup</p>
          <p className='services-card'>App Integrations</p>
          <p className='services-card'>Bug Fixes</p>
          <p className='services-card'>Speed Optimization</p>
          <p className='services-card'>Converstion Rate</p>
          <p className='services-card'>Training & Support</p>
        </div>
      </div>
    </section>
  )
}

export default Services