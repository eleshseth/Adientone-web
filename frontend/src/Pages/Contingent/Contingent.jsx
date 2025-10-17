import React from 'react';
import { assets } from '../../assets/assets';
import Image from '../../components/Image/Image.jsx';
import Paragraph from '../../components/Paragraph/Paragraph.jsx';
import Experience from '../../components/Experience/Experience.jsx';
import Engagements from '../../components/Engagements/Engagements.jsx';
import ServiceSection from '../../components/ServiceSection/ServiceSection.jsx';

const Contingent = () => {
  return (
    <div>
      <Image src={assets.contingent} title='Contingent Staffing at AdientOne' />
      <Paragraph
        points={[
          'We have extensive knowledge in providing the complete range of technical skills and job roles at all levels. We understand that contract staff is a valuable resource to all our clients and therefore we have experienced and professional consultants with industry knowhow and expertise in our team, who are able to ensure best suitable candidates with high calibre, are approached.',
          'We have an extensive network and database of candidates for both long and short-term assignments and all candidates are contacted regularly by our recruiters ensuring our database is up to date and enabling us to inform our clients if any highly experienced candidate becomes available.',
          'Our combination of industry expertise and proven recruitment processes ensures that clients benefit from a fast, high quality and cost-effective recruitment service.',
          'Our recruitment process allows us to update our databases on a frequent basis. Our consultants are constantly in the loop regarding new and exciting opportunities. We regularly advertise roles on the internet, job boards and with agencies specializing in Software Developers, Business Analysts, Software Administrators, Accounting and Financial, Help Desk Experts, Software Architects, IT Managers, Professionals and Management staff, to attract the best of consultants. Most importantly adientone have a distinguished network of contacts within the industry that ensure we have our finger on the pulse of the industry at all times.',
          'Once a candidate has been identified we will ensure all paperwork is completed and up-to date making the clients’ role simple and straightforward. We always strive to maintain an excellent relationship with our consultants, which contribute to high retention levels. In short, we build strong partnership with our clients and our consultants.',
        ]}
      />
      <Experience />
      <Engagements />
      <ServiceSection />
    </div>
  );
};

export default Contingent;
