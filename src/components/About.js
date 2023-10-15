import React from 'react'

const About = () => {
  return (
    <section className='section-about'>
      <div className='about-content'>
        <div className='about-video-with-text-container'>
          <div className='about-text-section'>
            <h2 className='about-heading'>About Me</h2>
            <p className='about-text'>Hi, I'm Curtis! I help online businesses succeed on Shopify. Leverage my 10+ years of experience in Shopify development, web and UI/UX design, and digital marketing, and let's take your business to the next level.</p>
            <h4 className='about-heading'>Technologies I Use</h4>
            <p className='about-text'>HTML, CSS, JavaScript, Shopify Liquid, Shopify CLI, React, Node, MongoDB, Github, Adobe Photoshop, Adobe XD, Figma, and GPT-4.</p>
          </div>
          <div className='about-video-section'>
            <div className='about-video'>PLAY</div>
          </div>
        </div>
        <div className='about-trust-badge-container'>
          <div className='about-trust-badge'>
            <div className='trust-icon'>ICON</div>
            <h4>TRUST ONE</h4>
            <p>Some text about trust one.</p>
          </div>
          <div className='about-trust-badge'>
            <div className='trust-icon'>ICON</div>
            <h4>TRUST ONE</h4>
            <p>Some text about trust one.</p>
          </div>
          <div className='about-trust-badge'>
            <div className='trust-icon'>ICON</div>
            <h4>TRUST ONE</h4>
            <p>Some text about trust one.</p>
          </div>
          <div className='about-trust-badge'>
            <div className='trust-icon'>ICON</div>
            <h4>TRUST ONE</h4>
            <p>Some text about trust one.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About