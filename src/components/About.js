import React from 'react'
import IconBadge from '../assets/IconBadge'
import IconResume from '../assets/IconResume'
import IconCreditCard from '../assets/IconCreditCard'
import IconSupport from '../assets/IconSupport'

const About = () => {
  return (
    <section className='section alt-bg'>
      <div className='section-content'>
        <h2 className='section-heading'>About Me</h2>
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
            <IconBadge />
            <h4>100% Success Rate</h4>
            <p>On Upwork</p>
          </div>
          <div className='about-trust-badge'>
            <IconResume />
            <h4>10+ Years Experience</h4>
            <p>In Ecommerce</p>
          </div>
          <div className='about-trust-badge'>
            <IconCreditCard />
            <h4>100% Money-Back</h4>
            <p>Guarantee</p>
          </div>
          <div className='about-trust-badge'>
            <IconSupport />
            <h4>Ongoing Support</h4>
            <p>& Maintainence</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About