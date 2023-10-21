import React, { useState } from 'react';

const Faq = ({ activeSection }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: 'Question 1',
      answer: 'Answer to Question 1',
    },
    {
      question: 'Question 2',
      answer: 'Answer to Question 2',
    },
    {
      question: 'Question 3',
      answer: 'Answer to Question 3',
    },
    {
      question: 'Question 4',
      answer: 'Answer to Question 4',
    },
    {
      question: 'Question 5',
      answer: 'Answer to Question 5',
    }
  ];

  const toggleAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section id="faq" className='section'>
      <div className='section-content'>
        <div className='section-heading'>
          <h2 className={`${activeSection === 'faq' ? 'heading-active' : ''}`}>
            FAQ
          </h2>
        </div>
        <div className="faq-container">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <h4
                className={`faq-question ${index === activeIndex ? 'active' : ''}`}
                onClick={() => toggleAccordion(index)}
              >
                {item.question}
              </h4>
                {index === activeIndex && (
                  <p className="faq-answer">
                   {item.answer}
                  </p>
                )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
