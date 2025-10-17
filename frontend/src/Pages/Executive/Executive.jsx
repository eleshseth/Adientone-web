import React from 'react';
import './executive.css';
import { assets } from '../../assets/assets';
import Image from '../../components/Image/Image.jsx';
import Paragraph from '../../components/Paragraph/Paragraph.jsx';
import Experience from '../../components/Experience/Experience.jsx';
import Engagements from '../../components/Engagements/Engagements.jsx';
import ServiceSection from '../../components/ServiceSection/ServiceSection.jsx';


const Executive = () => (
  <div className='executive-container'>
    <Image src={assets.Executive} title='Executive Search at AdientOne' />
    <Paragraph
      points={[
        'We specialize in finding highly skilled resources that bring the best to you and are motivated and productive from the get-go. Our client partner teams come from diverse cross section of skills and different levels of experience. Our network of recruiters and partners are the key to recruiting qualified professionals who help meet the organizational goals of our clients. We are completely focussed and committed in understanding the clients consulting needs and delivering it in an unparalleled way in quickest turn-around time.',
        'Over the years we have realized that “the same leader may be perfect for one company and totally wrong for another” and therefore it is really important to understand the minutest details and objectives of the recruitment for a particular position before initiating the search.',
        'We believe in partnership with the best and providing the best to our clients. Whatever is the consulting need, whether a full time or a contractual position for a specific project, we take the assignments with commitment to great execution.',
        'A key differentiator and as standard practice, we always do the Screening Interviews, Skills inventory, Personal and Professional Reference checks, back ground checks and work authorization check, in co-ordination with the clients.',
      ]}
    />
    <Experience/>
    <Engagements/>
    
 <ServiceSection/>
 
  </div>
);

export default Executive;
