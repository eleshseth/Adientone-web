import React, { useEffect, useRef, useState } from 'react';
import './Experience.css';

const stats = [
  { value: 38000, label: 'Jobs Worked Annually' },
  { value: 20000, label: 'Job Applicants Monthly' },
  { value: 60000, label: 'Candidates Submitted Annually' },
  { value: 12500, label: 'Contractors Currently on Assignment' },
];

const AnimatedNumber = ({ target, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startVal = 0;
    const duration = 2200;
    const increment = Math.ceil(target / (duration / 16));
    let raf;

    const animate = () => {
      startVal += increment;
      if (startVal < target) {
        setCount(startVal);
        raf = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };
    animate();
    return () => cancelAnimationFrame(raf);
  }, [target, start]);

  return <span>{count.toLocaleString()}</span>;
};

const Experience = () => {
  const expRef = useRef(null);
  const [expInView, setExpInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!expRef.current) return;
      const rect = expRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setExpInView(true);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='experience' ref={expRef} style={{ width: '100%' }}>
      <div className='experience-text'>Years of Recruitment Experience</div>
      <div className='our-details'>
        {stats.map((stat) => (
          <div key={stat.label}>
            <h1>
              <AnimatedNumber target={stat.value} start={expInView} />+
            </h1>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
