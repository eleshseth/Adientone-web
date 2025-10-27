import React from 'react';
import { assets } from '../../assets/assets';
import Image from '../../components/Image/Image.jsx';
import Points from '../../components/Points/Points.jsx';
import Paragraph from '../../components/Paragraph/Paragraph.jsx';
import Experience from '../../components/Experience/Experience.jsx';
import Engagements from '../../components/Engagements/Engagements.jsx';
import ServiceSection from '../../components/ServiceSection/ServiceSection.jsx';
import Excellence from '../../components/Excellence/Excellence.jsx';

const corporateRolesPoints = [
  'Accounting/Finance',
  'HR/Legal',
  'Administrative/Clerical',
  'Marketing & Communications',
  'Information Technology',
  'Supply Chain, Procurement, And Logistics',
  'Research & Development',
  'Regulatory',
  'Insurance/Actuarial',
  'Credit Operations',
  'Lending Operations',
  'Project Management',
  'Risk Management',
  'Customer Service',
];

const FinanceService = () => (
  <div className='financeservice-container'>
    <Image
      src={assets.finance}
      title='Finance Service Recruitment at AdientOne'
    />
    <Paragraph
      title={'FINANCE SERVICES'}
      description={
        'We offer Banking and Financial Services clients an integrated approach – aligning talent strategy with business strategy – providing enterprise-wide talent on-demand that can support:'
      }
    />
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Manufacturing Roles</h2>
      <Points
        title='Corporate & Business Services Roles'
        points={corporateRolesPoints}
      />
      <Experience />
      <Excellence />
      <ServiceSection />
      <Engagements />
    </div>
   
  </div>
);

export default FinanceService;
