import React, { useEffect } from 'react';
import './career.css';
import { assets } from '../../assets/assets';

const Career = () => {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://jobsapi.ceipal.com/APISource/widget.js";
    script.type = "text/javascript";
    script.async = true;

    // Add required attributes
    script.setAttribute(
      "data-ceipal-api-key",
      "T1BQeDZXRHd3dGRQTWpLK2JTdnpXQT09"
    );
    script.setAttribute(
      "data-ceipal-career-portal-id",
      "Z3RkUkt2OXZJVld2MjFpOVRSTXoxZz09"
    );

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // cleanup
    };
  }, []);

  const benefits = [
    {
      icon: '📈',
      title: 'Growth Opportunities',
      description:
        'Advance your career with continuous learning and development programs',
    },
    {
      icon: '💼',
      title: 'Competitive Benefits',
      description:
        'Comprehensive healthcare, retirement plans, and performance bonuses',
    },
    {
      icon: '⚖️',
      title: 'Work-Life Balance',
      description:
        'Flexible working arrangements and supportive work environment',
    },
    {
      icon: '💡',
      title: 'Innovation Culture',
      description:
        'Be part of cutting-edge recruitment solutions and technologies',
    },
  ];

  const openings = [
    {
      title: 'Senior Recruitment Consultant',
      location: 'New York, NY',
      experience: '3-5 years in recruitment',
      type: 'Full-time',
    },
    {
      title: 'Talent Specialist',
      location: 'San Francisco, CA',
      experience: '2-4 years recruitment',
      type: 'Full-time',
    },
    {
      title: 'Business Development Manager',
      location: 'Chicago, IL',
      experience: '5+ years in business development',
      type: 'Full-time',
    },
  ];

  return (
    <div className='career-container'>
      
      {/* Hero Section */}
      <section className='career-hero'>
        <div className='hero-background'>
          <img
            src={assets.technology}
            alt='Career Background'
            className='hero-bg-image'
          />
          <div className='hero-overlay'></div>
        </div>
        <div className='hero-content'>
          <h1 className='hero-title'>Join Our Team</h1>
          <p className='hero-subtitle'>
            Build your career with AdientOne and be part of our success story
          </p>
          <div className='hero-cta'>
            <button className='cta-button'>Explore Opportunities</button>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className='why-work-section'>
        <div className='section-container'>
          <h2 className='section-title'>Why Work With Us?</h2>
          <div className='benefits-grid'>
            {benefits.map((benefit, index) => (
              <div key={index} className='benefit-card'>
                <div className='benefit-icon'>{benefit.icon}</div>
                <h3 className='benefit-title'>{benefit.title}</h3>
                <p className='benefit-description'>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEIPAL JOB WIDGET SECTION (🔥 MAIN INTEGRATION) */}
      <section className='openings-section'>
        <div className='section-container'>
          <h2 className='section-title'>Current Openings</h2>

          {/* This div is REQUIRED for widget */}
          <div id="example-widget-container"></div>
        </div>
      </section>

      {/* Optional Static Openings (can remove if widget replaces it) */}
      <section className='openings-section'>
        <div className='section-container'>
          <h2 className='section-title'>Other Opportunities</h2>
          <div className='openings-grid'>
            {openings.map((opening, index) => (
              <div key={index} className='opening-card'>
                <div className='opening-header'>
                  <h3 className='opening-title'>{opening.title}</h3>
                  <span className='opening-type'>{opening.type}</span>
                </div>
                <div className='opening-details'>
                  <div className='detail-item'>
                    📍 {opening.location}
                  </div>
                  <div className='detail-item'>
                    💼 {opening.experience}
                  </div>
                </div>
                <button className='apply-button'>Apply Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='cta-section'>
        <div className='cta-content'>
          <h2 className='cta-title'>Ready to Start Your Journey?</h2>
          <p className='cta-description'>
            Don't see a position that fits? Send us your resume.
          </p>
          <button className='cta-button secondary'>Send Resume</button>
        </div>
      </section>

    </div>
  );
};

export default Career;