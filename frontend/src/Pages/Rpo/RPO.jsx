import React from 'react';
import { assets } from '../../assets/assets';
import Image from '../../components/Image/Image.jsx';
import Paragraph from '../../components/Paragraph/Paragraph.jsx';
import Experience from '../../components/Experience/Experience.jsx';
import Engagements from '../../components/Engagements/Engagements.jsx';
import ServiceSection from '../../components/ServiceSection/ServiceSection.jsx';
import Excellence from '../../components/Excellence/Excellence.jsx';
import HowDifferent from '../../components/HowDifferent/HowDifferent.jsx';

const RPO = () => {
  return (
    <div>
      <Image src={assets.rpos} title='RPO Solutions at AdientOne' />
      <Paragraph
        title={'Payroll Solutions'}
        description={[
          'AdientOne’s Recruitment Process Outsourcing (RPO) solutions are designed to streamline your hiring process and deliver top talent efficiently.',
          'Our RPO services provide end-to-end recruitment support, from sourcing and screening to onboarding, tailored to your business needs.',
          'We leverage advanced technology, proven methodologies, and deep industry expertise to ensure quality hires and a seamless candidate experience.',
          'Partner with AdientOne to reduce time-to-fill, improve quality of hire, and gain a strategic advantage in talent acquisition.',
        ]}
      />
      
      <Experience />
      <Excellence />
      <Engagements />
      <ServiceSection />
      <HowDifferent />
          <div className='video-section'>
            <video className='background-video' autoPlay loop muted>
              <source src={assets.cloud} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
            <div className='video-content'>
              <h2>Transform Your Workforce</h2>
              <p>Partner with us for innovative staffing solutions</p>
              {/* <button className='video-cta'>Learn More</button> */}
            </div>
          </div>
    </div>
  );
};

export default RPO;
