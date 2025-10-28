import React from 'react';
import './aboutus.css';
import { assets } from '../../assets/assets';

const AboutUs = () => (
  <>
    <div>
      <div className='aboutus-section'>
        <h1>About AdientOne</h1>
        <div className='aboutus-content'>
          {/* <img
            src={assets.logo}
            alt='AdientOne Logo'
            className='aboutus-background-logo'
          /> */}
          <p>
            Our Industry Practice Groups Are Guided By Professionals Who Have
            In-Depth Knowledge And Experience Across A Range Of Sectors. Our
            Team Members Are Seasoned And Offer An Insider's Perspective Which
            They Have Gained Through The Senior Positions They Have Held Within
            Leading Fortune 500 Companies – Market Leaders. We Therefore Know
            How To Deliver The Most Suited Candidates For C-Suite Positions In
            An Evolving Market. Our Industry Practices Include Services,
            Information Technology, Financial Services, Research And Analytics,
            Retail, Management Consulting And Other Professional Services. We
            Firmly Believe That Human Resource Is The Backbone Of Any
            Organization And Recruitment Is The Most Important Human Resources
            Function When It Comes To Return On Investment. We At Adientone,
            While Working With The Clients, Believe That It Is Of Utmost
            Importance To Thoroughly Understand The Strategic Importance Of The
            Position And Expectations From The Prospective Executives By
            Collaborating With Our Clients. This Approach Helps Us In Spotting
            The Leaders With Required Skills And Experience, Who Are Ready To
            Accept The New Challenges And Deliver Outstanding Results. We
            Constantly Strive To Identify The Best Talent In Varied Industries
            Across The Globe Through Rigorous Approach And Network. We Also
            Believe In Maintaining Long Term Relations Not Only With Our Clients
            But Also With Industry Leaders As We Know That These Leaders Make
            Things Happen Around The World. Our Deep Understanding Of The
            Industries And Continuous Efforts Has Helped Clients In Building
            Leadership Teams Which Have Been Instrumental In Delivering The
            Results By Exceeding Expectations Against All Odds. Our Executive
            Team At Adientone Consists Of A Diverse Group Of Experienced
            Executives Who Are Leaders In Their Communities And In The Business
            World. We Are Especially Good Listeners And Pride Ourselves In
            Strategically Aligning Ourselves To Our Customer's Business
            Objectives. Our Vision For Success Is To Provide Significant Value
            In IT Managed Services And Talent Management Solutions With Complete
            Satisfaction.
          </p>
        </div>
      </div>
      <div className='company-overview-section'>
        <h2>Company Overview</h2>
        <p>
          AdientOne is Disadvantaged Business Enterprise (DBE) Certified
          executive search consulting firm. Founded and promoted by Industry
          experts who have deep understanding about the dynamics of the
          recruitment Industry. We are the partners to the organizations seeking
          guidance and counsel on middle and senior leadership roles. Our
          industry practice groups are guided by professionals who have in-depth
          knowledge and experience across a range of sectors. Our team members
          are seasoned and offer an insider’s perspective which they have gained
          through the senior positions they have held within leading Fortune 500
          companies – market leaders. We therefore know how to deliver the most
          suited candidates for C-suite positions in an evolving market.
        </p>
      </div>
      <div className='vision-section'>
        <h2>Our Vision</h2>
        <p>
          To be the preferred partner for workforce solutions, recognized for
          our commitment to excellence, integrity, and innovation.
        </p>
      </div>
      <div className='mission-section'>
        <h2>Our Mission</h2>
        <p>
          To deliver exceptional talent and services that enable our clients to
          achieve their business objectives while fostering a culture of
          respect, diversity, and continuous improvement.
        </p>
      </div>

      <div className='why-choose-section'>
        <h2>Why Choose AdientOne?</h2>
        <ul>
          <li>
            <strong>Expertise:</strong> Our team has extensive experience in
            workforce management and talent acquisition.
          </li>
          <li>
            <strong>Customized Solutions:</strong> We tailor our services to
            meet the unique needs of each client.
          </li>
          <li>
            <strong>Quality Assurance:</strong> We are committed to delivering
            high-quality candidates and services.
          </li>
          <li>
            <strong>Innovation:</strong> We leverage the latest technologies and
            best practices to stay ahead in the industry.
          </li>
          <li>
            <strong>Client Focus:</strong> Our clients are at the heart of
            everything we do.
          </li>
        </ul>
      </div>

      <div className='certifications-section'>
        <h2>Certifications</h2>
        <p>
          AdientOne is committed to maintaining the highest industry standards
          and compliance requirements. Our certifications demonstrate our
          dedication to quality, security, and excellence in service delivery.
        </p>

        <div className='certifications-container'>
          <div className='certification-item'>
            <img
              src={assets.nmsdc}
              alt='NMSDC Certification'
              className='certification-logo'
            />
            <h4>NMSDC Certified</h4>
          </div>
          <div className='certification-item'>
            <img
              src={assets.minority}
              alt='Minority Business Enterprise'
              className='certification-logo'
            />
            <h4>Minority Women's Business Enterprise</h4>
          </div>
        </div>
      </div>
    </div>
    <div>
      {' '}
      {/* <Services
        title='Our Services'
        desc={
          <>
            We offer a wide range of specialized services to meet the unique
            needs of every business.
            <br />
            Our expertise ensures you get the right talent and solutions for
            your growth.
          </>
        }
        icons={servicesIcons}
      /> */}
    </div>
  </>
);

export default AboutUs;
