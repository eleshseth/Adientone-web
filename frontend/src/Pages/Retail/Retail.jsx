import React from 'react';
import { assets } from '../../assets/assets';
import Image from '../../components/Image/Image.jsx';
import Points from '../../components/Points/Points.jsx';
import Paragraph from '../../components/Paragraph/Paragraph.jsx';
import Experience from '../../components/Experience/Experience.jsx';
import Engagements from '../../components/Engagements/Engagements.jsx';
import ServiceSection from '../../components/ServiceSection/ServiceSection.jsx';

 const ecommercePoints = [
   'Financial Reporting Specialist',
   'Omnichannel Manager',
   'E-Commerce Sales Associate',
   'Customer Service Rep',
   'Product Manager',
   'Marketing Specialist',
   'Pricing Analyst',
   'Inventory Control Specialist',
   'Supply Chain Analyst',
   'Fulfillment Manager',
   'E-Commerce Developer',
   'E-Commerce IT Management',
   'Logistics Coordinator',
   'CRM Specialist',
   'Data & Analytics Specialist',
   'Graphic Designer',
   'Merchandising Specialist',
   'Logistics Coordinator',
   'Retail Strategist',
   'Legal & Compliance Specialist',
 ];


const Retail = () => (
  <div className='retail-container'>
    <Image src={assets.retail} title='Retail at AdientOne' />
    <Paragraph
      title={'RETAIL'}
      description={[
        'The best retailers are constantly innovating to align the customer experience with their overall business strategy. The retail landscape has been reshaped by the Internet, creating new business models and adding new dimensions to traditional brick-and-mortar stores.',
        'Consumer behavior is shifting rapidly, moving from physical store purchases to online retailing. This shift impacts every aspect of retail operations – from marketing and customer service to inventory management and fulfillment.',
        'At the same time, retailers face challenges around maximizing the value of expensive real estate and adapting to evolving consumer expectations in a highly competitive marketplace.',
        'We help retailers acquire and manage the talent they need, with specialized capabilities in Supply Chain, POS, Merchandising, and E-commerce – enabling our clients to compete and succeed in today’s dynamic retail environment.',
      ]}
    />
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Manufacturing Roles</h2>
      <Points points={ecommercePoints} />
      <Experience />
      <ServiceSection />
      <Engagements />
    </div>
    <Experience />
    <Engagements />
    <ServiceSection />
  </div>
);

export default Retail;
