import React from 'react';
import { assets } from '../../assets/assets';
import Image from '../../components/Image/Image.jsx';
import Points from '../../components/Points/Points.jsx';
import Paragraph from '../../components/Paragraph/Paragraph.jsx';
import Experience from '../../components/Experience/Experience.jsx';
import Engagements from '../../components/Engagements/Engagements.jsx';
import ServiceSection from '../../components/ServiceSection/ServiceSection.jsx';
import Excellence from '../../components/Excellence/Excellence.jsx';

const publicSectorPoints = [
  'Accounting, Tax & Treasury',
  'Government Administrator',
  'Social Work',
  'Law Enforcement',
  'Teaching',
  'Marketing And Communications',
  'Policy And Procedure',
  'Project Management',
  'Legal And Compliance',
  'Quality Assurance And Risk Management',
  'IT Specialist',
  'Human Resources',
  'Procurement & Supply Chain',
  'Executive Search Legal',
  'Property & Construction',
  'Consultancy, Strategy & Change',
  'Clinical Data Analyst',
];

const PublicSector = () => (
  <div className='publicsector-container'>
    <Image src={assets.sector} title='Public Sector at AdientOne' />
    <Paragraph
      title={'PUBLIC SECTOR'}
      description={[
        'We know that as an employer or candidate within the public sector, you require a recruitment partner with comprehensive knowledge of this specialist market. You need someone who understands public sector jobs and the geography you operate in. We are here to help you in every way to provide fast and cost-effective services.',
        'The government and public sector are under great demands and undergoing unprecedented change. Government agencies and public organizations are pressed to improve services to citizens, while at the same time taxpayers and interest groups push for budget control and reform.',
        'To successfully meet these challenges and deal with the conflicts, government and public sector organizations must transform the way they work to reduce costs and improve the delivery of services. We help organizations throughout the public sector acquire and manage the talent they need to more effectively meet the needs of the purpose and people they serve.',
      ]}
    />
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Public Sector Roles</h2>
      <Points
        title='Public Sector & Professional Services Roles'
        points={publicSectorPoints}
      />
      <Experience />
      <Excellence />
      <ServiceSection />
      <Engagements />
    </div>
  </div>
);

export default PublicSector;
