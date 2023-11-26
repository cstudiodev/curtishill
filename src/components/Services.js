import React, { useState } from 'react';

const Services = ({ activeSection }) => {
  const [flipped, setFlipped] = useState({});

  const handleClick = (index) => {
    setFlipped({
      ...flipped,
      [index]: !flipped[index],
    });
  };

  const servicesList = [
    { front: 'Planning & Consulting', back: 'Develop a comprehensive strategy for your eCommerce business with expert advice.' },
    { front: 'Web Design', back: 'Get bespoke web designs that are not only visually stunning but also optimized for conversions and user engagement.' },
    { front: 'UI/UX Design', back: 'Create a user-centric interface that’s intuitive, easy-to-navigate, and designed to facilitate customer journeys.' },
    { front: 'Shopify 1.0', back: 'Maximize the capabilities of the original Shopify platform with full-stack development services.' },
    { front: 'Shopify 2.0', back: 'Leverage the advanced features and capabilities offered by Shopify 2.0 to take your store to the next level.' },
    { front: 'Shopify Plus', back: 'Benefit from specialized solutions tailored for high-volume businesses, making use of the robust capabilities of Shopify Plus.' },
    { front: 'New Store Builds', back: 'Transform your business concept into a fully functional Shopify store, complete with all features you need for success.' },
    { front: 'Store Migrations', back: 'Move your existing online store to the Shopify platform with zero downtime and a seamless transition process.' },
    { front: 'Customizations', back: 'Customize your Shopify store with unique features and functionalities tailored to fit your specific business needs.' },
    { front: 'Theme Setup', back: 'Ensure your Shopify theme is installed and configured to offer optimal performance and user experience.' },
    { front: 'App Integrations', back: 'Extend your store’s capabilities with vital third-party app integrations that enhance functionality.' },
    { front: 'Bug Fixes', back: 'Identify and resolve glitches, bugs, or any issues that hinder your store’s performance and customer experience.' },
    { front: 'Speed Optimization', back: 'Boost site speed through optimizations that enhance user experience and improve search engine rankings.' },
    { front: 'Conversion Optimization', back: 'Apply data-driven strategies to significantly improve your store’s conversion rates and customer engagement.' },
    { front: 'Training & Support', back: 'Equip your team with the necessary skills and knowledge for effective store management, supported by ongoing expert guidance.' },
  ];  

  return (
    <section id="services" className="section">
      <div className="section-content">
        <div className="section-heading">
          <h2 className={`${activeSection === 'services' ? 'heading-active' : ''}`}>
            How I Can Help You
          </h2>
        </div>
        <div className="services-card-container">
          {servicesList.map((service, index) => (
            <div
              className={`services-card ${flipped[index] ? 'flipped' : ''}`}
              key={index}
              onClick={() => handleClick(index)}
            >
              <div className="card-front">
                <p>{service.front}</p>
              </div>
              <div className="card-back">
                <p>{service.back}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
