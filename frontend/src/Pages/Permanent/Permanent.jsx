import React from 'react'
import { assets } from '../../assets/assets';
import Image from '../../components/Image/Image.jsx';
import Paragraph from '../../components/Paragraph/Paragraph.jsx';
import Experience from '../../components/Experience/Experience.jsx';
import Engagements from '../../components/Engagements/Engagements.jsx';
import ServiceSection from '../../components/ServiceSection/ServiceSection.jsx';
import Excellence from '../../components/Excellence/Excellence.jsx';



const Permanent = () => {
  return (
    <div>
      {' '}
      <Image src={assets.permanents} title='Executive Search at AdientOne' />
      <Paragraph
        title={'Permanent Hiring'}
        description={[
          'We provide quality and comprehensive services incorporating all aspects of the recruitment process to allow clients to achieve their objectives on time.',
          'We help our clients to make their recruitment and onboarding processes effective and this is the reason we are currently partner of choice with several Software, Telecom, Research and Analytics, Information Technology, Banking & Finance, Travel, Fashion, Pharma, Medical, Hospitality and Consulting majors in various domains. Our innovative incentive-based peer networking has helped us tie up with a variety of senior, mid-level and Junior executives from the corporate world, who work as an extended arm of our family.',
          'Apart from the unique mode of corporate networking we also effectively use the traditional advertising forums, social & professional groups and our homegrown database. Our database is continuously updated and replenished through Applicant Tracking System, networking and extensive advertising in online and print medias. We look for the best options from a local and national perspective and combine our efforts to provide support to your recruiters. Our experience means that we are in touch with market information such as benefits, salaries and employment trends.',
          'As an organization we pride ourselves on the level of understanding we develop about technologies and the need of our customers. This is achieved through hard work and commitment and ensures that we remain at the forefront in meeting our clients’ requirements, business goals, strategy and needs.',
        ]}
      />
      <Experience />
      <Excellence />
      <Engagements />
      <ServiceSection />
    </div>
  );
}

export default Permanent