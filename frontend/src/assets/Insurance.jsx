import React from 'react';
import { assets } from '../../assets/assets';
import Video from '../../components/Video/Video';
import Slider from '../../components/Slider/Slider';
import Experience from '../../components/Experience/Experience';
import Partner from '../../components/Partner/Partner';
import Engagements from '../../components/Engagements/Engagements';
import Paragraph from '../../components/Paragraph/paragraph';
import Service from '../../components/Service/Service';
import './Insurance.css';

const Insurance = () => {
  return (
    <div>
      <Video
        videoSrc={assets.hospitality}
        heading='Hospitality'
        paragraph='Enhancing Hospitality with exceptional talent and tailored solutions to deliver unforgettable guest experiences.'
      />
      <Paragraph
        title={'HOSPITALITY'}
        description={
          'In the competitive world of hospitality, delivering exceptional guest experiences is paramount. Altislink is dedicated to connecting hospitality organizations with the talent and solutions they need to thrive.'
        }
      />
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
      <Experience />
      <Service />
      <Partner />
      <Engagements />
    </div>
  );
};

export default Insurance;
