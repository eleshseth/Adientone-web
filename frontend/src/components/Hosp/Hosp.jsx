import React from 'react'
import { assets } from '../../assets/assets';
import './Hosp.css';

const Hosp = () => {
  return (
    <div>
      {' '}
      <div className='hospitality-experience'>
        <div>
          <img src={assets.mask} alt='Hospitality' />
        </div>
        <div>
          <h1>
            We’re your source for hospitality jobs near you and nationwide.
          </h1>
          <p>
            We partner with more hotels, resorts, restaurants, and other
            hospitality venues than any other staffing agency in the United
            States. You can trust AdientOne to find you employment at one of the
            thousands of properties we serve. We work with more hotels, resorts,
            and casinos than any other staffing agency and focus on these
            clients. That means more hospitality jobs at more hotels for you to
            choose from.
          </p>
        </div>
      </div>
      <div className='hospitality-engagements'>
        <div>
          <h1>Benefits of Working with AdientOne</h1>
          <p>
            AdientOne works with over 10,000 people just like you all across the
            United States. Many of our associates have been with us for over 10
            years and many advance into management positions. Some of the
            benefits of working with AdientOne include:
          </p>
        </div>
        <div>
          <img src={assets.staff} alt='Engagements' />
        </div>
      </div>
      <img className='hosp' src={assets.hosp} alt='Hospitality' />
    </div>
  );
}

export default Hosp