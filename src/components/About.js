import React from 'react'

const About = () => {
  return (
    <section className='section-about'>
      <div className='about-content'>
        <h2 className='about-heading'>About Me</h2>
        <div className='about-video-with-text-container'>
          <div className='about-text-section'>
            <p className='about-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p className='about-text'>Technologies I use:</p>
            <div className='about-technology-container'>
              <p className='about-technology'>HTML</p>
              <p className='about-technology'>CSS</p>
              <p className='about-technology'>JavaScript</p>
              <p className='about-technology'>Shopify Liquid</p>
              <p className='about-technology'>Shopify CLI</p>
              <p className='about-technology'>React</p>
              <p className='about-technology'>Node</p>
              <p className='about-technology'>MongoDB</p>
              <p className='about-technology'>Github</p>
              <p className='about-technology'>Adobe Photoshop</p>
              <p className='about-technology'>Adobe XD</p>
              <p className='about-technology'>Figma</p>
              <p className='about-technology'>GPT-4</p>
            </div>
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