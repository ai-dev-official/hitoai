import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import styles from "./Booking";


const Services = () => {
  const [showModal, setShowModal] = useState(false); 
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Consultancy in AI',
    business: '',
    message: '',
  });
  const form = useRef();

  const service_id = import.meta.env.VITE_SERVICE_ID;
  const template_id = import.meta.env.VITE_TEMPLATE_ID;
  const public_key = import.meta.env.VITE_PUBLIC_KEY;


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^[0-9()#&+*-=.\s]+$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number format.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format.';
    }
    if (!formData.business.trim()) {
      newErrors.business = 'Business characterization is required.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    }

    return newErrors;
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    emailjs
      .sendForm(
        service_id,
        template_id,
        form.current,
        public_key,
        )
      .then(
        (result) => {
          console.log(result.text);
          setShowModal(true); 
           // Clear the form data
          setFormData({
            name: '',
            phone: '',
            email: '',
            service: 'Consultancy in AI',
            business: '',
            message: '',
          });
          setErrors({}); 

          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Error sending message!");
        }
      );
  };


  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className='booking__wrapper'>
      <h3>
        Fill out your details below with the service that you need, we’ll get back to you to book an appointment.
      </h3>
      <div className="booking__form__wrapper">
        <form 
        // name="FooterForm"
        ref={form}
        onSubmit={handleSubmit} 
        encType="multipart/form-data"
        >


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
                  {errors.name && <span className="error">{errors.name}</span>}
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
                    pattern="[0-9()#&+*-=.\s]+" // Allow spaces and common phone characters
                    title="Only numbers and phone characters (#, -, *, etc) are accepted."
                  />
                  {errors.phone && <span className="error">{errors.phone}</span>}
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
                  {errors.email && <span className="error">{errors.email}</span>}
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
                  {errors.business && <span className="error">{errors.business}</span>}
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
                {errors.message && <span className="error">{errors.message}</span>}
              </div>
            </div>

            <div className='booking__submit'>
              <a><button type="submit" className='btn booking__button'>Submit Now</button></a>
            </div>
          </div>
        </form>
      </div>

      {/* Modal */}
      {showModal && (
        <div className={"modal__booking"}>
            <div className={"container__booking"}>
              <h1 className={"title__booking"}>Your message was sent successfully!</h1>
              <div className={"main__booking"}>
                <h3 className={"htext__booking"}>
                  Thanks, a team member will get back to you soon!
                </h3>
                <a className={"btn"} onClick={closeModal}>
                  Close
                </a>
              </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default Services;
