import React from 'react';

import { assets } from '../../assets/assets';
import Image from '../../components/Image/Image.jsx';
import Points from '../../components/Points/Points.jsx';
import Paragraph from '../../components/Paragraph/Paragraph.jsx';
import Experience from '../../components/Experience/Experience.jsx';
import Engagements from '../../components/Engagements/Engagements.jsx';
import ServiceSection from '../../components/ServiceSection/ServiceSection.jsx';
import Excellence from '../../components/Excellence/Excellence.jsx';

const aerospacePoints = [
  'Aerospace Engineer',
  'Mechanical Engineer',
  'Software Engineer',
  'Manufacturing Technician',
  'Environmental Advisor',
  'Market Research Analyst',
  'Learning & Development Manager',
  'Supply Chain Manager',
  'Data Scientist',
  'Test Engineer',
  'Quality Control',
  'Safety Engineer',
  'Occupational Health Advisor',
  'Production Engineer',
  'Cybersecurity Specialist',
  'Logistician',
  'Research Analyst',
  'Legal Counsel',
  'Compliance Officer',
];

const Aerospace = () => (
  <div className='aerospace-container'>
    <Image src={assets.defence} title='Aerospace & Defense at AdientOne' />
    <Paragraph
      title={'Aerospace & Defense'}
      description={[
        'The aerospace & defense industry faces ongoing global challenges and a growing demand for new technology, innovation, and improved performance.',
        'At the same time, financial constraints from budget cuts have mandated cost controls and reductions. For success, aerospace and defense companies need to continue to evaluate operations and find ways to innovate and implement new technologies to drive down costs.',
        'We help aerospace and defense companies acquire and manage the talent they need to meet the challenges of a changing industry and gain a competitive advantage. Our aerospace & defense team works solely within this sector, with our consultants having specialist knowledge and a wealth of expertise.',
        'We serve clients by providing professional, technical, and administrative talent on a temporary, permanent, and contract basis.',
        'AdientOne offers Aerospace & Defense clients an integrated approach – aligning talent strategy with business strategy – providing enterprise-wide talent on-demand that can support:',
      ]}
    />
    <div style={{ textAlign: 'center', marginTop: '20px' }}>

      <Points title='Available Roles' points={aerospacePoints} />

      <Experience />
      <Excellence />
      <ServiceSection />
      <Engagements />
    </div>
    
  </div>
);

export default Aerospace;
