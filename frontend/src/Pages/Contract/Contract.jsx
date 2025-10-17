import React from 'react';
import { assets } from '../../assets/assets';
import Image from '../../components/Image/Image.jsx';
import Paragraph from '../../components/Paragraph/Paragraph.jsx';
import Experience from '../../components/Experience/Experience.jsx';
import Engagements from '../../components/Engagements/Engagements.jsx';
import ServiceSection from '../../components/ServiceSection/ServiceSection.jsx';

const Contract = () => {
  return (
    <div>
      <Image src={assets.contracts} title='Contract to Hire at AdientOne' />
      <Paragraph
        points={[
          'AdientOne also provides the flexibility to its customer a risk free hiring approach that encompasses of hiring a candidate through contract to hire route. We understand the time limitation and other risks involved in selection of a right candidate for many positions. For some position, you are more interested in hiring known candidates who has some experience working in your environment. This strategy can dramatically reduce your hiring risk by enabling you to test the employee’s skills, compatibility, and work ethics before making a long-term hiring decision. Likewise, the employee can determine if the position and company are perfect fit for them, which in turn helps you reduce unexpected turnover.',
          'AdientOne has an extensive network and database of candidates who are interested in contract to hire positions. Our team contact these candidates regularly and ensures that our database is up to date. Our recruitment process allows us to update our databases on frequent basis.',
          'Once a candidate is identified we ensure all paperwork is completed and up-to date making the clients’ role simple and straightforward. We always strive to maintain an excellent relationship with our consultants, which contribute to high retention levels.',
          'In short, we build strong partnership with our clients, our consultants and our candidates.',
        ]}
      />
      <Experience />
      <Engagements />
      <ServiceSection />
    </div>
  );
};

export default Contract;
