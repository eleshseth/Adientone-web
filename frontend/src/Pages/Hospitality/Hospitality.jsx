import React from 'react';
import { assets } from '../../assets/assets';
import Image from '../../components/Image/Image.jsx';
import Points from '../../components/Points/Points.jsx';
import Paragraph from '../../components/Paragraph/Paragraph.jsx';
import Experience from '../../components/Experience/Experience.jsx';
import Engagements from '../../components/Engagements/Engagements.jsx';
import ServiceSection from '../../components/ServiceSection/ServiceSection.jsx';
import Excellence from '../../components/Excellence/Excellence.jsx';

const hospitalityRoles = [
  'Front Office Manager',
  'Guest Relations Executive',
  'Housekeeping Supervisor',
  'Food and Beverage Manager',
  'Executive Chef',
  'Sous Chef',
  'Restaurant Manager',
  'Banquet Coordinator',
  'Event Planner',
  'Concierge',
  'Hospitality Trainer',
  'Revenue Manager',
  'Hotel Operations Manager',
  'Travel and Tourism Consultant',
  'Catering Manager',
  'Reservation Agent',
  'Customer Service Representative',
  'Spa and Wellness Manager',
  'Sales and Marketing Executive',
  'General Manager',
];


const Hospitality = () => (
  <div className='hospitality-container'>
    <Image src={assets.hospitality} title='Hospitality at AdientOne' />
    <Paragraph
      title={'HOSPITALITY'}
      description={[
        'The hospitality industry offers a wide range of services including hotels, restaurants, travel, and tourism — all focused on delivering exceptional guest experiences.',
        'As customer expectations evolve, there is growing demand for innovation, personalized services, and technology-driven solutions to enhance convenience and satisfaction.',
        'Our recruiters, with extensive experience in the hospitality sector, help organizations attract, develop, and retain skilled professionals who can deliver excellence and drive business growth.',
        'We successfully recruit across all segments of the hospitality marketplace, including Hotels & Resorts, Food & Beverage, Travel & Tourism, Event Management, and Facility Services.',
        'AdientOne provides hospitality clients with a comprehensive talent strategy – aligning people with business goals – to ensure seamless operations, superior service quality, and sustainable success.',
      ]}
    />
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Manufacturing Roles</h2>
      <Points points={hospitalityRoles} />
      <Experience />
      <Excellence />
      <ServiceSection />
      <Engagements />
    </div>
    
  </div>
);

export default Hospitality;
