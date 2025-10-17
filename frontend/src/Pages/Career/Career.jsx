import React, { useState } from 'react';
import './career.css';

const jobsData = [
  {
    title: 'Frontend Developer',
    location: 'Remote',
    type: 'Full Time',
    desc: 'Join our team to build beautiful, scalable web applications using React and modern web technologies.',
    color: '#0091ff',
  },
  {
    title: 'Backend Engineer',
    location: 'Bangalore, India',
    type: 'Full Time',
    desc: 'Work with Node.js and cloud services to create robust APIs and backend systems for global clients.',
    color: '#53b83a',
  },
  {
    title: 'UI/UX Designer',
    location: 'Remote',
    type: 'Contract',
    desc: 'Design intuitive user experiences and interfaces for enterprise and consumer applications.',
    color: '#67c2fa',
  },
  {
    title: 'Project Manager',
    location: 'Delhi, India',
    type: 'Full Time',
    desc: 'Lead cross-functional teams and deliver projects on time with agile methodologies.',
    color: '#82d46d',
  },
];

const Career = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className='career-container'>
      <h1 className='career-heading'>Join Our Team</h1>
      <p className='career-desc'>
        Explore exciting career opportunities at AdientOne. We value innovation,
        collaboration, and growth. Apply now and be part of a dynamic team!
      </p>
      <div className='career-cards'>
        {jobsData.map((job, idx) => (
          <div
            className={`career-card${selected === idx ? ' active' : ''}`}
            key={job.title}
            style={{
              borderColor: job.color,
              animationDelay: `${idx * 0.13}s`,
            }}
            onClick={() => setSelected(idx)}>
            <h2 className='career-title' style={{ color: job.color }}>
              {job.title}
            </h2>
            <div className='career-meta'>
              <span className='career-location'>{job.location}</span>
              <span className='career-type'>{job.type}</span>
            </div>
            <p className='career-job-desc'>{job.desc}</p>
            <button className='career-apply-btn'>Apply Now</button>
            {selected === idx && (
              <div className='career-apply-form'>
                <input type='text' placeholder='Your Name' />
                <input type='email' placeholder='Your Email' />
                <textarea placeholder='Why are you a good fit?' />
                <button className='career-submit-btn'>
                  Submit Application
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;
