import React, { useState, useRef } from 'react';
import IconPlus from '../assets/IconPlus';
import IconMinus from '../assets/IconMinus';

const Faq = ({ activeSection }) => {
  const [activeIndices, setActiveIndices] = useState([]);
  const [allOpen, setAllOpen] = useState(false);
  const contentRef = useRef([]);

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
