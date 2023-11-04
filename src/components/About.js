import React, { useState } from 'react';
import IconInfo from '../assets/IconInfo'
import IconClose from '../assets/IconClose'
import IconBadge from '../assets/IconBadge'
import IconResume from '../assets/IconResume'
import IconCreditCard from '../assets/IconCreditCard'
import IconSupport from '../assets/IconSupport'

const About = ({ activeSection }) => {
  const [visibleTooltip, setVisibleTooltip] = useState(null);

  const technologies = [
    { name: 'HTML', tooltip: 'Hypertext Markup Language is the backbone of web pages, defining the structure and presentation of content on the Internet.' },
    { name: 'CSS', tooltip: 'Cascading Style Sheets control the visual presentation and layout of HTML elements, enabling stylized, responsive designs.' },
    { name: 'JavaScript', tooltip: 'JavaScript enables interactive and dynamic user experiences in the browser. It is a key component of modern web development.' },
    { name: 'Shopify Liquid', tooltip: 'Shopify Liquid is an open-source template language specifically designed for customizing Shopify’s eCommerce themes.' },
    { name: 'Shopify CLI', tooltip: 'The Shopify Command Line Interface is a tool that facilitates building and managing Shopify themes and apps, streamlining the development workflow.' },
    { name: 'React', tooltip: 'React is a JavaScript library developed by Facebook for building user interfaces. It is renowned for its virtual DOM and component-based architecture.' },
    { name: 'Node', tooltip: 'Node.js is a runtime environment that executes JavaScript on the server side, allowing the development of scalable network applications.' },
    { name: 'MongoDB', tooltip: 'MongoDB is a NoSQL database that offers high performance and scalability. It uses a flexible, JSON-like document model for data storage.' },
    { name: 'GitHub', tooltip: 'GitHub is a web-based platform that uses Git for version control, allowing multiple people to collaborate on software projects.' },
    { name: 'Adobe Photoshop', tooltip: 'Adobe Photoshop is a leading graphic editing software, primarily used for raster graphics, image manipulation, and digital art.' },
    { name: 'Adobe XD', tooltip: 'Adobe XD is a vector-based design tool used for creating user interfaces and prototypes for web and mobile apps.' },
    { name: 'Figma', tooltip: 'Figma is a cloud-based design tool that allows real-time collaboration. It is used for UI and UX design, prototyping, and more.' },
    { name: 'GPT-4', tooltip: 'The GPT-4 (Generative Pre-trained Transformer 4) model by OpenAI is one of the latest advancements in artificial intelligence, offering sophisticated natural language understanding and generation.' }
  ];  

  const handleTooltip = (index) => {
    setVisibleTooltip(index === visibleTooltip ? null : index);
  };
  return (
    <section id="about" className='section alt-bg'>
      <div className='section-content'>
        <div className='section-heading'>
          <h2 className={`${activeSection === 'about' ? 'heading-active' : ''}`}>
            About Me
          </h2>
        </div>
        <div className='about-video-with-text-container'>
          <div className='about-text-section'>
            <p className='about-text'>Hi, I'm Curtis, your dedicated Shopify expert. I'm here to elevate your online store with custom solutions that blend beauty with functionality. We'll not only captivate your customers with stunning design but also empower them with a user-friendly experience that converts. From coding to conversion-driven strategies, let's team up to amplify your digital presence and ignite your sales!</p>
            <p className='about-text'>Technologies I use:</p>
            <div className='about-technology-container'>
              {technologies.map((tech, index) => (
                <div key={index} className='about-technologies'>
                  <div className='about-technology'>
                    <p>{tech.name}</p>
                    <span className='tooltip-icon' onClick={() => handleTooltip(index)}>
                      <IconInfo />
                    </span>
                  </div>
                  {visibleTooltip === index && (
                    <div className='tooltip-popup'>
                      <p className='tooltip-content'>
                        <div className='tooltip-close' onClick={() => handleTooltip(null)}>
                          <IconClose />
                        </div>
                        {tech.tooltip}
                      </p>
                    </div>
                  )}
                </div>
              ))}
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