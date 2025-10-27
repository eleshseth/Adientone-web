import React from 'react'
import Image from '../../components/Image/Image'
import { assets } from '../../assets/assets'
import Paragraph from '../../components/Paragraph/Paragraph'
import Points from '../../components/Points/Points'
import Experience from '../../components/Experience/Experience'
import ServiceSection from '../../components/ServiceSection/ServiceSection'
import Engagements from '../../components/Engagements/Engagements'
import Excellence from '../../components/Excellence/Excellence'
const manufacturingRoles = [
  'Industrial Engineer',
  'Bio/Chemical',
  'Civil/Structural',
  'Aerospace/Automotive',
  'Maintenance Technician',
  'Supply Chain Specialist',
  'Mechanical Engineer',
  'Manufacturing Technician',
  'Environmental Advisor',
  'Market Research Analyst',
  'Assembly Line Workers',
  'Machine Operator',
  'Quality Control Inspector',
  'Production Supervisors',
  'Health And Safety Specialist',
  'Industrial Designer',
  'Automation Engineer',
];
const Manufacturing = () => {
  return (
    <div>
      <Image src={assets.manufacturing} title='Manufacturing at AdientOne' />
      <Paragraph
        title={'Manufacturing & Engineering'}
        description={[
          'Manufacturers today are constantly challenged by the market – from local to global – to deliver the right product to the right buyer at the right price and time. Regardless of the product, the marketplace is more demanding than ever, competition is intense, credit is tight, and sustainability is critical.',
          'To succeed in this environment, manufacturers must address evolving challenges, adapt to market changes, meet customer demands, and continuously improve quality while keeping costs under control.',
          'Adientone Solutions helps manufacturers acquire and manage the talent they need to adapt in a rapidly changing industry, overcome everyday challenges, and gain a competitive advantage.',
          'Adientone offers manufacturing clients an integrated approach – aligning talent strategy with business strategy – and delivering enterprise-wide talent on demand across diverse roles, including:',
        ]}
      />
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2>Manufacturing Roles</h2>
        <Points points={manufacturingRoles} />
        <Experience />
        <Excellence />
        <ServiceSection/>
        <Engagements/>
      </div>
    </div>
  );
}

export default Manufacturing
