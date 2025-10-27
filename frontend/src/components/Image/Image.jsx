import React from 'react';

const Image = ({ src, title, alt = '' }) => (
  <div
    style={{
      position: 'relative',
      display: 'inline-block',
      width: '200vh',
      overflow: 'hidden',
     
      height: '75vh',
    }}>
    <img
      src={src}
      alt={alt || title}
      style={{
        width: '100%',
        height: '140%',
        objectFit: 'cover',
        objectPosition: 'center',
        display: 'block',
        marginTop: '-10%',
        marginBottom: '-20%',
       
        boxShadow: '0 4px 16px rgba(103, 194, 250, 0.13)',
      }}
    />
    {/* <div
      style={{
        position: 'absolute',
        bottom: '12px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'rgba(0,145,255,0.85)',
        color: '#fff',
        padding: '8px 18px',
        borderRadius: '8px',
        fontWeight: '600',
        fontSize: '1.08rem',
        letterSpacing: '0.5px',
        boxShadow: '0 2px 8px rgba(83, 184, 58, 0.10)',
      }}>
      {title}
    </div> */}
  </div>
);

export default Image;
