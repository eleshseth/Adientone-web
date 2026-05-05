import React from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';
import './Specific.css';
import Telecommunication from '../../Pages/Telecommunication/Telecommunication';

const Specific = () => {
  const navigate = useNavigate();

  const handleImageClick = (industry) => {
    switch (industry) {
      case 'banking':
        navigate('/financeservice');
        break;
      case 'automotive':
        navigate('/aerospace');
        break;
      case 'semiconsuctor':
        navigate('/manufacturing');
        break;
      case 'energy':
        navigate('/lightindustrial');
        break;
      case 'hospital':
        navigate('/hospitality');
        break;
     
      case 'professional':
        navigate('/technology');
        break;
      case 'healthcare':
        navigate('/pharmaceutical');
        break;
      case 'lifee':
        navigate('/pharmaceutical');
        break;
      case 'tele':
        navigate('/telecommunication');
        break;
      case 'manufacturing':
        navigate('/manufacturing');
        break;
      case 'technology':
        navigate('/technology');
        break;
      case 'retail':
        navigate('/retail');
        break;
      case 'defense':
        navigate('/defense');
        break;
      case 'insurance':
        navigate('/financeservice');
        break;
      case 'goverment':
        navigate('/publicsector');
        break;
      default:
        console.log(`Navigation for ${industry} not implemented yet`);
    }
  };

  return (
    <div className='specific'>
      <h1>Industry-Specific Expertise</h1>
      <div className='specific-grid'>
        <div
          className='specific-image'
          style={{ backgroundImage: `url(${assets.Banking})` }}
          onClick={() => handleImageClick('banking')}></div>
        <div
          className='specific-image'
          style={{ backgroundImage: `url(${assets.hospital})` }}
          onClick={() => handleImageClick('hospital')}></div>
        <div
          className='specific-image'
          style={{ backgroundImage: `url(${assets.healthcare})` }}
          onClick={() => handleImageClick('healthcare')}></div>
        <div
          className='specific-image'
          style={{ backgroundImage: `url(${assets.insurance})` }}
          onClick={() => handleImageClick('insurance')}></div>
        <div
          className='specific-image'
          style={{ backgroundImage: `url(${assets.professional})` }}
          onClick={() => handleImageClick('professional')}></div>
        <div
          className='specific-image'
          style={{ backgroundImage: `url(${assets.retaila})` }}
          onClick={() => handleImageClick('retail')}></div>
        <div
          className='specific-image'
          style={{ backgroundImage: `url(${assets.tele})` }}
          onClick={() => handleImageClick('tele')}></div>
        <div
          className='specific-image'
          style={{ backgroundImage: `url(${assets.semiconsuctor})` }}
          onClick={() => handleImageClick('semiconsuctor')}></div>
        <div
          className='specific-image'
          style={{ backgroundImage: `url(${assets.goverment})` }}
          onClick={() => handleImageClick('goverment')}></div>
        <div
          className='specific-image'
          style={{ backgroundImage: `url(${assets.energy})` }}
          onClick={() => handleImageClick('energy')}></div>
        <div
          className='specific-image'
          style={{ backgroundImage: `url(${assets.lifee})` }}
          onClick={() => handleImageClick('lifee')}></div>
        <div
          className='specific-image'
          style={{ backgroundImage: `url(${assets.automotive})` }}
          onClick={() => handleImageClick('automotive')}></div>
      </div>
    </div>
  );
};

export default Specific;
