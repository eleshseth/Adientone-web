import React from 'react';
import { assets } from '../../assets/assets';
import './Specific.css';

const Specific = () => {
  return (
    <div className='specific'>
      <h1>Industry-Specific Expertise</h1>
      <div className='specific-grid'>
        <div
          className='specific-image'
          style={{ backgroundImage: `url(${assets.Banking})` }}></div>
        <div
          className='specific-image'
          style={{ backgroundImage: `url(${assets.hospital})` }}></div>
        <div
          className='specific-image'
          style={{ backgroundImage: `url(${assets.healthcare})` }}></div>
        <div
          className='specific-image'
          style={{ backgroundImage: `url(${assets.insurance})` }}></div>
        <div
          className='specific-image'
          style={{ backgroundImage: `url(${assets.professional})` }}></div>
        <div
          className='specific-image'
          style={{ backgroundImage: `url(${assets.retaila})` }}></div>
        <div
          className='specific-image'
          style={{ backgroundImage: `url(${assets.tele})` }}></div>
        <div
          className='specific-image'
          style={{ backgroundImage: `url(${assets.semiconsuctor})` }}></div>
        <div
          className='specific-image'
          style={{ backgroundImage: `url(${assets.goverment})` }}></div>
        <div
          className='specific-image'
          style={{ backgroundImage: `url(${assets.energy})` }}></div>
        <div
          className='specific-image'
          style={{ backgroundImage: `url(${assets.lifee})` }}></div>
        <div
          className='specific-image'
          style={{ backgroundImage: `url(${assets.automotive})` }}></div>
      </div>
    </div>
  );
};

export default Specific;
