import React, { useState } from 'react';
import './contactus.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Combine first and last name for backend compatibility
      const submissionData = {
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        number: formData.number,
        message: formData.message,
      };

      const response = await fetch('http://localhost:8003/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          number: '',
          message: '',
        });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError(result.error || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='contactus-container'>
      <div className='contactus-left'>
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you! Reach out to AdientOne for any inquiries,
          partnership opportunities, or support.
        </p>
        <div className='contactus-details'>
          <h2>Email</h2>
          <p>
            <a href='mailto:info@adientone.com'>info@adientone.com</a>
          </p>
          <h2>Phone</h2>
          <p>
            <a href='tel:+1234567890'>+1 206-614-0097</a>
          </p>
          <h2>Address</h2>
          <p>
            12138 Mukilteo Speedway,
            <br />
            Suite: M 203,
            <br />
            Mukilteo, WA 98275
          </p>
        </div>
      </div>
      <div className='contactus-right'>
        <h2>Send Us a Message</h2>

        {success && (
          <div className='success-message'>
            Thank you! Your message has been sent successfully. We'll get back
            to you soon.
          </div>
        )}

        {error && <div className='error-message'>{error}</div>}

        <form className='contactus-form' onSubmit={handleSubmit}>
          <div className='name-row'>
            <input
              type='text'
              name='firstName'
              placeholder='First Name'
              value={formData.firstName}
              onChange={handleChange}
              required
              disabled={loading}
            />
            <input
              type='text'
              name='lastName'
              placeholder='Last Name'
              value={formData.lastName}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>
          <input
            type='email'
            name='email'
            placeholder='Your Email'
            value={formData.email}
            onChange={handleChange}
            required
            disabled={loading}
          />
          <input
            type='tel'
            name='number'
            placeholder='Contact Number'
            value={formData.number}
            onChange={handleChange}
            required
            disabled={loading}
          />
          <textarea
            name='message'
            placeholder='Your Message'
            value={formData.message}
            onChange={handleChange}
            required
            disabled={loading}
          />
          <button type='submit' disabled={loading}>
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
