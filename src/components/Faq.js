import React, { useState, useRef } from 'react';
import IconPlus from '../assets/IconPlus';
import IconMinus from '../assets/IconMinus';

const Faq = ({ activeSection }) => {
  const [activeIndices, setActiveIndices] = useState([]);
  const [allOpen, setAllOpen] = useState(false);
  const contentRef = useRef([]);

  const faqData = [
    {
      question: "What experience do you have with Shopify development?",
      answer: "I have extensive experience working with a variety of brands on Shopify, ranging from startups to established businesses. My expertise covers both front-end and back-end development, ensuring a seamless shopping experience for your customers."
    },
    {
      question: "How do you handle data security and customer information?",
      answer: "Data security is paramount. I adhere to best practices and Shopify's guidelines to ensure all customer data is protected. Regular security audits are conducted to ensure the highest level of protection."
    },
    {
      question: "How customizable will the Shopify store be?",
      answer: "While Shopify offers a wide range of customization, I can further tailor the platform to meet specific brand requirements, ensuring your store stands out and aligns with your brand vision."
    },
    {
      question: "Do you offer ongoing maintenance and support?",
      answer: "Yes, I offer various support packages post-launch, ensuring your store remains updated, secure, and functional as your business grows."
    },
    {
      question: "How do you handle payment gateway integrations?",
      answer: "I integrate trusted payment gateways that align with your business needs, ensuring secure and seamless transactions for your customers."
    },
    {
      question: "What is your turnaround time for a typical project?",
      answer: "The turnaround time varies based on project complexity. However, I prioritize clear communication and set realistic timelines, ensuring projects are delivered as scheduled."
    },
    {
      question: "How do you handle potential issues or bugs post-launch?",
      answer: "I offer a warranty period post-launch where any potential issues or bugs are addressed promptly. Additionally, I provide support packages for continued assurance."
    },
    {
      question: "What strategies do you recommend for driving traffic to a new Shopify store?",
      answer: "I recommend a combination of SEO optimization, targeted advertising, content marketing, and leveraging social media platforms. Each strategy is tailored to the brand's target audience and business goals."
    },
    {
      question: "Can you integrate third-party apps or plugins?",
      answer: "Absolutely. I can integrate a wide range of third-party apps or plugins that enhance your store's functionality and improve user experience."
    },
    {
      question: "How do you ensure the website is mobile-responsive?",
      answer: "Mobile responsiveness is a priority. I test the website across various devices and browsers to ensure a consistent and optimal shopping experience for all users."
    },
    {
      question: "What training or resources do you provide for managing the store post-launch?",
      answer: "I offer training sessions and provide comprehensive documentation to ensure your team is equipped to manage and update the store effectively."
    },
    {
      question: "How do you approach SEO for Shopify stores?",
      answer: "I implement SEO best practices during development and offer guidance on content optimization, ensuring your store ranks effectively on search engines."
    },
    {
      question: "What is your pricing model?",
      answer: "My pricing is project-based, factoring in the complexity and requirements of the project. I provide a detailed breakdown and ensure transparency throughout the process."
    },
    {
      question: "Can you migrate data from another platform to Shopify?",
      answer: "Yes, I can assist with data migration from other platforms to Shopify, ensuring data integrity and a smooth transition."
    },
    {
      question: "Do you have experience with international stores or multi-language setups?",
      answer: "Yes, I've worked with brands that operate internationally and can set up multi-language and multi-currency stores to cater to a global audience."
    },
    {
      question: "How do you handle projects that require a team or additional expertise?",
      answer: "If a project requires additional expertise or resources, I collaborate with a network of trusted professionals to ensure all project requirements are met to the highest standard."
    },
    {
      question: "What is your process for understanding a brand's vision and goals for their Shopify store?",
      answer: "I begin with a comprehensive consultation to understand your brand's vision, goals, and specific requirements. This allows me to tailor the development process to align with your business objectives."
    },
    {
      question: "How do you ensure the website speed and performance are optimized?",
      answer: "Website performance is crucial for user experience and SEO. I implement best practices such as optimizing images, leveraging browser caching, and minimizing code to ensure your Shopify store loads swiftly."
    },
    {
      question: "What measures do you take for website accessibility?",
      answer: "I ensure that the Shopify store is developed with accessibility in mind, adhering to WCAG guidelines. This includes providing text alternatives, ensuring keyboard accessibility, and testing for various user scenarios."
    },
    {
      question: "Do you offer any post-launch marketing or analytics support?",
      answer: "While my primary focus is on development, I can offer guidance on marketing tools and analytics integrations for Shopify. This ensures you can effectively monitor and grow your online presence post-launch."
    }
  ];   

  const toggleAccordion = (index) => {
    const newActiveIndices = [...activeIndices];
    if (newActiveIndices.includes(index)) {
      newActiveIndices.splice(newActiveIndices.indexOf(index), 1);
    } else {
      newActiveIndices.push(index);
    }
    setActiveIndices(newActiveIndices);
  };

  const toggleAll = () => {
    if (allOpen) {
      setActiveIndices([]);
    } else {
      setActiveIndices(Array.from({ length: faqData.length }, (_, i) => i));
    }
    setAllOpen(!allOpen);
  };

  return (
    <section id="faq" className='section'>
      <div className='section-content'>
        <div className='section-heading faq-heading'>
          <h2 className={`${activeSection === 'faq' ? 'heading-active' : ''}`}>
            FAQ
          </h2>
          <div className='toggle-container'>
            <input type="checkbox" id="switch" checked={allOpen} onChange={toggleAll} />
            <label htmlFor="switch">Toggle</label>
          </div>
        </div>
        <div className="faq-container">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <div
                className={`faq-question ${activeIndices.includes(index) ? 'active' : ''}`}
                onClick={() => toggleAccordion(index)}
              >
                <h4>{item.question}</h4>
                <h4 className='faq-icon'>
                  {activeIndices.includes(index) ? <IconMinus /> : <IconPlus />}
                </h4>
              </div>
              <div 
                ref={el => contentRef.current[index] = el}
                className={`faq-answer ${activeIndices.includes(index) ? 'active' : ''}`}
                style={{
                  maxHeight: activeIndices.includes(index) ? `${contentRef.current[index]?.scrollHeight}px` : '0',
                }}
              >
                <p className="faq-answer-content">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
