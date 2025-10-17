import React, { useEffect, useRef, useState } from 'react';
import './Engagements.css';

const engagementStats = [
  { value: 24, label: 'Hour Response Time' },
  { value: 100, label: 'Percent Transparency' },
  { value: 7, label: 'Day Average Time-to-Hire' },
  { value: 99, label: 'Percent Client Retention' },
];

const AnimatedNumber = ({ target, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startVal = 0;
    const duration = 1800;
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

const Engagements = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setInView(true);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='engagements' ref={ref}>
      <div className='engagements-text'>How We Deliver Our Engagements</div>
      <div className='engagements-subheading'>
        Empower your teams to run faster and have complete control and
        visibility for an accelerated hiring process.
      </div>
      <div className='engagements-details'>
        {engagementStats.map((stat, idx) => (
          <div
            key={stat.label}
            style={{ animationDelay: `${0.2 + idx * 0.2}s` }}>
            <h1>
              <AnimatedNumber target={stat.value} start={inView} />
              {stat.label.includes('Percent')
                ? '%'
                : stat.label.includes('Hour')
                ? 'h'
                : stat.label.includes('Day')
                ? 'd'
                : ''}
            </h1>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Engagements;
