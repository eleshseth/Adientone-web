import React from 'react';
import { assets } from '../../assets/assets';
import './HowDifferent.css';

const HowDifferent = () => {
  return (
    <div className='how-different'>
      <div className='different-grid'>
        <div className='different-content'>
          <img
            src={assets.logo}
            alt='AdientOne Logo'
            className='different-logo'
          />
          <h2 className='different-head'>How We Are Different</h2>
          <p>
            There is no one-size-fits-all approach to recruitment, there must be
            a process tailored to the type of business and to the type of people
            the business wants to recruit.
          </p>
          <button className='different-button'>Learn More</button>
        </div>
        <div className='different-image-container'>
          <img
            src={assets.diffrent}
            alt='different approach'
            className='different-image'
          />
          <div className='different-overlay'></div>
        </div>
      </div>
    </div>
  );
};

export default HowDifferent;
