import React from 'react';
import './technology.css';
import { assets } from '../../assets/assets';
import Image from '../../components/Image/Image.jsx';
import Points from '../../components/Points/Points.jsx';
import Paragraph from '../../components/Paragraph/Paragraph.jsx';
import Experience from '../../components/Experience/Experience.jsx';
import Engagements from '../../components/Engagements/Engagements.jsx';
import ServiceSection from '../../components/ServiceSection/ServiceSection.jsx';
import Excellence from '../../components/Excellence/Excellence.jsx';

const ecommerceRoles = [
  
  'Omnichannel Manager',
  'E–Commerce Sales Associate',
  'Product Manager',
  'Marketing Specialist',
  'Inventory Control Specialist',
  'Fulfillment Manager',
  'E–Commerce Developer',
  'E–Commerce IT Management',
  'CRM Specialist',
  'Data & Analytics Specialist',
  'Graphic Designer',
  'Software Engineer',
  'Data Scientist',
  'Quality Control'
];

const Technology = () => (
  <div className='technology-container'>
    <Image
      src={assets.technology}
      title='Technology Recruitment at AdientOne'
    />
    <Paragraph
        title={'Technology Recruitment'}
        description={[
          'Information Technology is a dynamic industry, displaying at some levels little barrier to entry, and at other levels intense global competition among some of the world’s most highly-valued brands.',
          'Regardless, the industry is constantly driven by innovation and speed-to-market, by demanding users. For success, technology companies must address the challenge of globalization and competition, revenue and margin pressures due to current or would-be investors, and demand accelerated innovation.',
          'Our specialized recruiters who come from the industry have deep domain expertise and help companies to acquire and manage the talent they need to adapt in a changing industry, meet everyday challenges, and capitalize on new opportunities.',
          'AdientOne offers Technology clients an integrated approach – aligning talent strategy with business strategy – providing enterprise-wide talent on-demand that can support: ',
        ]}
      />
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2>Technology Roles</h2>
        <Points points={ecommerceRoles} />
     
      <Experience />
      <Excellence />
      <ServiceSection />
      <Engagements />
    </div>
    
  </div>
);

export default Technology;
