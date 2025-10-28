import React from 'react';
import { assets } from '../../assets/assets';
import Image from '../../components/Image/Image.jsx';
import Paragraph from '../../components/Paragraph/Paragraph.jsx';
import Experience from '../../components/Experience/Experience.jsx';
import Engagements from '../../components/Engagements/Engagements.jsx';
import ServiceSection from '../../components/ServiceSection/ServiceSection.jsx';
import Excellence from '../../components/Excellence/Excellence.jsx';
import HowDifferent from '../../components/HowDifferent/HowDifferent.jsx';
const Payroll = () => {
  return (
    <div>
      <Image src={assets.payrolls} title='Payroll Solutions at AdientOne' />
      <Paragraph
        title={'Payroll Solutions'}
        description={[
          'In conjunction with our Independent Contractor Compliance solution or as a stand-alone offering, AdientOne provides comprehensive payroll process outsourcing. This enables our clients to effectively leverage access to specific talent pools for contingent workers while shifting the administrative burden of employment to us.',
          'Our payroll services include a wide range of support such as Prequalification, Background Screening, Drug Testing, Custom Onboarding, Payroll, Tax and Benefit Administration, Management and Reporting, along with other customized services tailored to client needs.',
          'By partnering with AdientOne, clients experience reduced risk, time savings, and significant cost efficiency — with a proven 10-15% cost reduction in most cases. Our services deliver the administrative support you need, when, where, and how you need it.',
          'Control costs, reduce risks, improve processes, and secure the talent you need through AdientOne’s payroll outsourcing solutions.',
          'For a more consultative and flexible approach to meet your payroll needs across the globe, contact AdientOne today.',
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

export default Payroll;
