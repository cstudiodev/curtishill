import React, { useState } from 'react';

const Contact = ({ activeSection }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/.netlify/functions/send-email', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
    
    console.log(formData);
  };

  return (
    <section id="contact" className='section'>
      <div className='section-content'>
        <div className='section-heading'>
          <h2 className={`${activeSection === 'contact' ? 'heading-active' : ''}`}>
            Let's Talk
          </h2>
        </div>
        <div className='contact-form'>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
