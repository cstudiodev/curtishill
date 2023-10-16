import React from 'react'

const About = () => {
  return (
    <section className='section-about'>
      <div className='about-content'>
        <h2 className='about-heading'>About Me</h2>
        <div className='about-video-with-text-container'>
          <div className='about-text-section'>
            <p className='about-text'>Hi, I'm Curtis!</p>
            <p className='about-text'>Leverage my 10+ years of experience in Shopify development, web and UI/UX design, and digital marketing, and let's take your business to the next level.</p>
            <p className='about-text'>Technologies I use:</p>
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