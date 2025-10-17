import React from 'react';
import { assets } from '../../assets/assets';
import Image from '../../components/Image/Image.jsx';
import Paragraph from '../../components/Paragraph/Paragraph.jsx';
import Experience from '../../components/Experience/Experience.jsx';
import Engagements from '../../components/Engagements/Engagements.jsx';
import ServiceSection from '../../components/ServiceSection/ServiceSection.jsx';

const RPO = () => {
  return (
    <div>
      <Image src={assets.rpos } title='RPO Solutions at AdientOne' />
      <Paragraph
        points={[
          'AdientOne’s Recruitment Process Outsourcing (RPO) solutions are designed to streamline your hiring process and deliver top talent efficiently.',
          'Our RPO services provide end-to-end recruitment support, from sourcing and screening to onboarding, tailored to your business needs.',
          'We leverage advanced technology, proven methodologies, and deep industry expertise to ensure quality hires and a seamless candidate experience.',
          'Partner with AdientOne to reduce time-to-fill, improve quality of hire, and gain a strategic advantage in talent acquisition.',
        ]}
      />
      <Experience />
      <Engagements />
      <ServiceSection />
    </div>
  );
};

export default RPO;
