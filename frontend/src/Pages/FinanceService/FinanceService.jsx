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
  'CFO',
  'Financial Reporting Specialist',
  'Accounts Associate',
  'Accounts Payable Analyst',
  'Accounts Payable/Receivable',
  'Compliance Officer',
  'Corporate Senior Payroll Specialist',
  'Cost Accountant',
  'Financial Analyst',
  'Mortgage Oversight Specialist',
  'Payroll Accountant',
  'Staff Accountant',
  'Associate Project Manager',
  'Legal & Compliance Specialist',
];
const FinanceService = () => (
  <div className='financeservice-container'>
    <Image
      src={assets.finance}
      title='Finance Service Recruitment at AdientOne'
    />
    <Paragraph
      title={'BANKING & FINANCIAL SERVICES'}
      description={[
        'We offer Banking and Financial Services clients an integrated approach aligning talent strategy with business strategy – providing enterprise-wide talent on-demand that can support:',
        'Accounting and finance operations are critical to business; and varied global rules, regulations, and reporting requirements make it increasingly complex.',
        'Our large pool of qualified strategic, transactional, operational, technical, and administrative finance and accounting professionals is supported by our recruiters who know the industry and source qualified candidates quickly.',
      ]}
    />
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Finance Services Roles</h2>
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
