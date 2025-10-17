import React, { useState, useEffect } from 'react';
import { assets } from '../../assets/assets';
import './ImageSlider.css';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [assets.manufacturing, assets.technology, assets.hospitality, assets.life, assets.retail, assets.defence,];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='image-slider'>
      <div className='slider-container'>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}>
            <img
              src={slide}
              alt={`Industry ${index + 1}`}
              className='slide-image'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
