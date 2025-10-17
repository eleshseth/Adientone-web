import React, { useState, useEffect, useRef } from 'react';
import './Paragraph.css';

const Paragraph = ({ title, description }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleParagraphs, setVisibleParagraphs] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);

            // Stagger paragraph animations
            if (Array.isArray(description)) {
              description.forEach((_, index) => {
                setTimeout(() => {
                  setVisibleParagraphs((prev) => [...prev, index]);
                }, (index + 1) * 300);
              });
            } else {
              setTimeout(() => {
                setVisibleParagraphs([0]);
              }, 300);
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [description]);

  return (
    <div className={`works ${isVisible ? 'visible' : ''}`} ref={containerRef}>
      <div>
        <h2 className={isVisible ? 'title-visible' : ''}>{title}</h2>
        {Array.isArray(description) ? (
          description.map((paragraph, index) => (
            <p
              key={index}
              className={
                visibleParagraphs.includes(index) ? 'paragraph-visible' : ''
              }>
              <span className='bullet'>•</span>
              {paragraph}
            </p>
          ))
        ) : (
          <p
            className={
              visibleParagraphs.includes(0) ? 'paragraph-visible' : ''
            }>
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default Paragraph;
