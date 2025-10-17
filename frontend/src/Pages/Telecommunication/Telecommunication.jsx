import React from 'react';
import { assets } from '../../assets/assets';
import Image from '../../components/Image/Image.jsx';
import Points from '../../components/Points/Points.jsx';
import Paragraph from '../../components/Paragraph/Paragraph.jsx';
import Experience from '../../components/Experience/Experience.jsx';
import Engagements from '../../components/Engagements/Engagements.jsx';
import ServiceSection from '../../components/ServiceSection/ServiceSection.jsx';

const telecommunicationRoles = [
  'Compliance Officer',
  'Market Research Analyst',
  'Telecommunications Engineer',
  'Field Technician',
  'Network Architect',
  'Fiber Optic Technician',
  'Supply Chain Analyst',
  'Logistics Coordinator',
  'Customer Service Rep',
  'Data Analyst',
  'Software Engineer',
  'Research & Development',
  'Regulatory Affairs Specialist',
  'Quality Assurance Specialist',
  'Help Desk Technician',
  'Wireless Network Engineer',
  'Product Manager',
  'Business Development Manager',
  'Network Security Analyst',
  'Technical Operations Manager',
];


const Telecommunication = () => (
  <div className='telecommunication-container'>
    <Image
      src={assets.telecomunications}
      title='Telecommunications at AdientOne'
    />
    <Paragraph
      title={'Telecommunications'}
      description={[
        'Telecom companies have opportunities to provide clients with content via television, internet, and telephony, through cable and wireless services.',
        'There is significant market pressure to expand while innovating new and economical technology that provides new features, increased reliability, and value-added applications.',
        'Our specialized recruiters, who come from the industry, have deep domain expertise and help companies acquire and manage the talent they need to adapt in a changing industry, meet everyday challenges, and capitalize on new opportunities.',
        'We successfully recruit for all sectors of the telecom marketplace, including Carrier, Systems Integration, Mobile, Call Center, Internet Services, and Networking.',
        'AdientOne offers Telecom clients an integrated approach – aligning talent strategy with business strategy – providing enterprise-wide talent on-demand that can support:',
      ]}
    />
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Manufacturing Roles</h2>
      <Points points={telecommunicationRoles} />
      <Experience />
      <ServiceSection />
      <Engagements />
    </div>
    <Experience />
    <Engagements />
    <ServiceSection />
  </div>
);

export default Telecommunication;
