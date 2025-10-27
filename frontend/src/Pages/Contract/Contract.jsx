import React from 'react';
import { assets } from '../../assets/assets';
import Image from '../../components/Image/Image.jsx';
import Paragraph from '../../components/Paragraph/Paragraph.jsx';
import Experience from '../../components/Experience/Experience.jsx';
import Engagements from '../../components/Engagements/Engagements.jsx';
import ServiceSection from '../../components/ServiceSection/ServiceSection.jsx';
import Excellence from '../../components/Excellence/Excellence.jsx';

const Contract = () => {
  return (
    <div>
      <Image src={assets.contracts} title='Contract to Hire at AdientOne' />
      <Paragraph
        title={'Contract to Hire'}
        description={[
          'Adientone also provides the flexibility to its customers through a risk-free hiring approach that encompasses hiring a candidate via the contract-to-hire route. We understand the time limitations and risks involved in selecting the right candidate for many positions. For some roles, clients are more inclined to hire known candidates with prior experience working in their environment. This strategy dramatically reduces hiring risks by enabling clients to test the employee’s skills, compatibility, and work ethics before making a long-term hiring decision. Likewise, it allows the employee to evaluate if the position and company are the right fit, ultimately reducing unexpected turnover.',
          'Adientone has built an extensive network and database of candidates who are interested in contract-to-hire positions. Our team connects with these candidates regularly and ensures that our database remains current and accurate. Through our recruitment process, we are able to frequently update this database, ensuring our clients have access to the most relevant talent pool.',
          'Once a candidate is identified, Adientone ensures that all paperwork and compliance requirements are completed and kept up to date, making the client’s role simple and straightforward. We always strive to maintain excellent relationships with our consultants, which contributes to high retention levels and long-term success.',
          'In short, Adientone is committed to building strong partnerships with our clients, consultants, and candidates, ensuring a seamless and effective hiring process for all parties involved.',
        ]}
      />
      <Experience />
      <Excellence />
      <Engagements />
      <ServiceSection />
    </div>
  );
};

export default Contract;
