import React from 'react';
import { assets } from '../../assets/assets';
import Image from '../../components/Image/Image.jsx';
import Paragraph from '../../components/Paragraph/Paragraph.jsx';
import Experience from '../../components/Experience/Experience.jsx';
import Engagements from '../../components/Engagements/Engagements.jsx';
import ServiceSection from '../../components/ServiceSection/ServiceSection.jsx';

const Payroll = () => {
  return (
    <div>
      <Image src={assets.payrolls} title='Payroll Solutions at AdientOne' />
      <Paragraph
        points={[
          'In conjunction with our Independent Contractor Compliance solution or as a stand-alone solution, AdientOne provides payroll process outsourcing, enabling our clients to leverage their ability to tap into certain talent pools for contingent workers. Our services provide clients with the ability to identify candidates for contract employment and transfer the administrative burden of employment to us, including:',
          'Our payroll process outsourcing services drive risk, time and cost out of the process (10-15% cost reduction in most cases), providing you with the administrative services you need – when, where and how you need them.',
          'Control costs, reduce risk, improve your process – and get the talent you need!',
          'For a more consultative, flexible approach to meet your payroll needs across the globe, contact adientone',
        ]}
      />
      <Experience />
      <Engagements />
      <ServiceSection />
    </div>
  );
};

export default Payroll;
