import React, { useState } from 'react';
import './jobhire.css';

const JobHire = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    positionInterested: '',
    aboutYourself: '',
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('fullName', formData.fullName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phoneNumber', formData.phoneNumber);
      formDataToSend.append('positionInterested', formData.positionInterested);
      formDataToSend.append('aboutYourself', formData.aboutYourself);

      if (resumeFile) {
        formDataToSend.append('resume', resumeFile);
      }

      const response = await fetch(
        'http://localhost:8012/api/job-application',
        {
          method: 'POST',
          body: formDataToSend,
        }
      );

      const result = await response.json();

      if (response.ok) {
        setSuccess(true);
        setFormData({
          fullName: '',
          email: '',
          phoneNumber: '',
          positionInterested: '',
          aboutYourself: '',
        });
        setResumeFile(null);
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError(
          result.error || 'Failed to submit application. Please try again.'
        );
      }
    } catch (err) {
      console.error('Error submitting application:', err);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='jobhire-container'>
      <h1 className='jobhire-heading'>Apply for a Job</h1>
      <p className='jobhire-desc'>
        Fill out the form below and our team will get in touch with you soon.
      </p>

      {success && (
        <div className='success-message'>
          Thank you! Your application has been submitted successfully. We'll
          review it and get back to you soon.
        </div>
      )}

      {error && <div className='error-message'>{error}</div>}

      <form className='jobhire-form' onSubmit={handleSubmit}>
        <input
          type='text'
          name='fullName'
          placeholder='Full Name'
          value={formData.fullName}
          onChange={handleChange}
          required
          disabled={loading}
        />
        <input
          type='email'
          name='email'
          placeholder='Email Address'
          value={formData.email}
          onChange={handleChange}
          required
          disabled={loading}
        />
        <input
          type='text'
          name='phoneNumber'
          placeholder='Phone Number'
          value={formData.phoneNumber}
          onChange={handleChange}
          required
          disabled={loading}
        />
        <input
          type='text'
          name='positionInterested'
          placeholder='Position Interested In'
          value={formData.positionInterested}
          onChange={handleChange}
          required
          disabled={loading}
        />
        <textarea
          name='aboutYourself'
          placeholder='Tell us about yourself'
          value={formData.aboutYourself}
          onChange={handleChange}
          required
          disabled={loading}
        />
        <div className='file-input-wrapper'>
          <label htmlFor='resume'>Upload Resume (Optional)</label>
          <input
            type='file'
            id='resume'
            name='resume'
            accept='.pdf,.doc,.docx'
            onChange={handleFileChange}
            disabled={loading}
          />
          {resumeFile && <span className='file-name'>{resumeFile.name}</span>}
        </div>
        <button type='submit' disabled={loading}>
          {loading ? 'Submitting...' : 'Submit Application'}
        </button>
      </form>
    </div>
  );
};

export default JobHire;
