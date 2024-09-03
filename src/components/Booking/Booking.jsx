import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Services = () => {
  // State variables to handle form inputs
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Consultancy in AI',
    business: '',
    message: '',
  });

  // Handle change in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS parameters
    const templateParams = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      service: formData.service,
      business: formData.business,
      message: formData.message,
    };

    // Sending email using EmailJS
    emailjs.send(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      templateParams,
      'YOUR_USER_ID' // Replace with your EmailJS user ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Your message has been sent successfully!');
    })
    .catch((err) => {
      console.error('FAILED...', err);
      alert('Failed to send the message, please try again.');
    });

    // Optionally reset form fields
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: 'Consultancy in AI',
      business: '',
      message: '',
    });
  };

  return (
    <div className='booking__wrapper'>
      <h3>
        Fill out your details below with the service that you need, we’ll get back to you to book an appointment.
      </h3>
      <div className="booking__form__wrapper">
        <form onSubmit={handleSubmit} name="FooterForm">
          <input type="hidden" name="post_id" value="267" />
          <input type="hidden" name="form_id" value="6cbbec7b" />
          <input type="hidden" name="referer_title" value="Services - HitoAI" />
          <input type="hidden" name="queried_id" value="267" />

          <div className='booking__input__wrapper'>
            <div className="booking__grid">
              <div className='booking__input'>
                <div className="booking__input__grid">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className='booking__input'>
                <div className="booking__input__grid">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    pattern="[0-9()#&+*-=.]+"
                    title="Only numbers and phone characters (#, -, *, etc) are accepted."
                  />
                </div>
              </div>
            </div>

            <div className="booking__grid">
              <div>
                <div className="booking__input__grid">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div>
                <div className="booking__input__grid">
                  <label htmlFor="business">What best characterizes your business?</label>
                  <input
                    type="text"
                    name="business"
                    id="business"
                    value={formData.business}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="booking__input__grid booking__select">
                <label htmlFor="service">Select Service</label>
                <select
                  name="service"
                  id="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="Consultancy in AI">Consultancy in AI</option>
                  <option value="AI-Enabled Software">AI-Enabled Software</option>
                  <option value="AI-Enabled API">AI-Enabled API</option>
                </select>
              </div>
            </div>

            <div>
              <div className="booking__input__grid">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="booking__message"
                  cols="30"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>

            <div className='booking__submit'>
              <a type="submit" className='btn'>Submit Now</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Services;
