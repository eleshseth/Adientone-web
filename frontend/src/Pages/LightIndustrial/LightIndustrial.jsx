import React from 'react';
import './lightindustrial.css';
import { assets } from '../../assets/assets';
import Image from '../../components/Image/Image.jsx';
import Points from '../../components/Points/Points.jsx';
import Paragraph from '../../components/Paragraph/Paragraph.jsx';
import Experience from '../../components/Experience/Experience.jsx';
import Engagements from '../../components/Engagements/Engagements.jsx';
import ServiceSection from '../../components/ServiceSection/ServiceSection.jsx';
import Excellence from '../../components/Excellence/Excellence.jsx';
const points = [
  'Machine Operators',
  'Forklift Operators',
  'Packers',
  'Assemblers',
  'Shipping And Receiving Associates',
  'And More…',
];
const LightIndustrial = () => (
  <div className='lightindustrial-container'>
    <Image src={assets.light} title='Light Industrial at AdientOne' />
    <Paragraph
      title={'Light Industrial'}
      description={[
        'Light industrial employers struggle to find reliable, skilled workers in today’s market. At the same time, light industrial talent struggles to find jobs with employers who value their work.',
        'Wouldn’t it be great if there were light industrial staffing agencies that could bridge that gap and connect good business with good people?',
        'We have been using our proven, specialized approach to ensure that industrial and manufacturing businesses can connect with the talent they need, exactly when they need it. AdientOne utilizes modern recruiting practices to locate, attract and retain the skilled laborers companies need.',
        'AdientOne offers Light Industrial clients an integrated approach – aligning talent strategy with business strategy – providing enterprise-wide talent on-demand.',
      ]}
    />
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Light Industrial Roles</h2>
      <Points title='Production' points={points} />
      <Experience />
      <Excellence />
      <ServiceSection />
      <Engagements />
    </div>
  </div>
);

export default LightIndustrial;
