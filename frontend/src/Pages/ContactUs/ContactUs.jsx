import React, { useState } from 'react';
import './contactus.css';
import { assets } from '../../assets/assets';

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
      <div className='contactus-content'>
        <div className='contactus-left'>
          <h1>Contact Us</h1>
          <p>
            We'd love to hear from you! Reach out to AdientOne for any
            inquiries, partnership opportunities, or support.
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

      <div className='map-section'>
        <h2 className='map-title'>Find Us Here</h2>
        <div className='map-wrapper'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.2486054534947!2d-122.28747568459394!3d47.91089797920681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549007b4b65b3f13%3A0x7c2e3f8b1234567!2s12138%20Mukilteo%20Speedway%2C%20Mukilteo%2C%20WA%2098275!5e0!3m2!1sen!2sus!4v1635959999999!5m2!1sen!2sus'
            width='100%'
            height='400'
            style={{ border: 0, borderRadius: '12px' }}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            title='AdientOne Location - Mukilteo, WA'
            className='google-map'></iframe>
        </div>
        <div className='map-address'>
          <h3>Our Office</h3>
          <p>
            12138 Mukilteo Speedway,
            <br />
            Suite: M 203,
            <br />
            Mukilteo, WA 98275
          </p>
        </div>

        <div className='location-section'>
          <h3 className='location-title'>Our Locations</h3>
          <div className='location-flags'>
            <div className='flag-item'>
              <img src={assets.usa} alt='USA' className='flag-icon' />
              <span className='flag-label'>USA</span>
            </div>
            <div className='flag-item'>
              <img src={assets.canada} alt='Canada' className='flag-icon' />
              <span className='flag-label'>Canada</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
