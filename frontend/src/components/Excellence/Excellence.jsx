import React from 'react';
import './Excellence.css';

const Excellence = () => {
  return (
    <section className='excellence-section'>
      <h2 className='excellence-main-heading'>Excellence</h2>
      <div className='excellence-container'>
        <div className='excellence-content'>
          <h2 className='excellence-title'>Excellence in Every Partnership</h2>
          <p className='excellence-subtitle'>
            Delivering exceptional talent solutions that drive your business
            forward
          </p>
          <div className='excellence-features'>
            <div className='feature-item'>
              <div className='feature-icon'></div>
              <h3>Precision Matching</h3>
              <p>Advanced algorithms to find the perfect fit</p>
            </div>
            <div className='feature-item'>
              <div className='feature-icon'></div>
              <h3>Rapid Deployment</h3>
              <p>Quick turnaround for urgent staffing needs</p>
            </div>
            <div className='feature-item'>
              <div className='feature-icon'></div>
              <h3>Quality Assurance</h3>
              <p>Rigorous vetting for top-tier candidates</p>
            </div>
          </div>
        </div>
        <div className='excellence-animation'>
          <div className='floating-shapes'>
            <div className='shape shape-1'></div>
            <div className='shape shape-2'></div>
            <div className='shape shape-3'></div>
            <div className='shape shape-4'></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Excellence;
