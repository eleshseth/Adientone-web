import React, { useState, useEffect } from 'react';
import { assets } from '../../assets/assets';
import './home.css';
import { useNavigate } from 'react-router-dom';
import Experience from '../../components/Experience/Experience';
import Specific from '../../components/Specific/Specific';
import Excellence from '../../components/Excellence/Excellence';
import HowDifferent from '../../components/HowDifferent/HowDifferent';

const whatWeDoData = [
  {
    title: 'Executive Search',
    desc: 'We specialize in finding highly skilled resources that bring the best to you and are motivated and productive from the...',
    icon: assets.search,
    color: '#53b83a',
    isSvg: true,
  },
  {
    title: 'Permanent Hiring',
    desc: 'We provide quality and comprehensive services incorporating all aspects of the recruitment process to allow clients to achieve their objectives...',
    icon: assets.permanent,
    color: '#0091ff',
    isSvg: true,
  },
  {
    title: 'Contingent Staffing',
    desc: 'We have extensive knowledge in providing the complete range of technical skills and job roles at all levels. We understand...',
    icon: assets.teamwork,
    color: '#82d46d',
    isSvg: true,
  },
  {
    title: 'Contract to Hire',
    desc: 'Adient One also provides the flexibility to its customer a risk free hiring approach that encompasses of hiring a candidate through...',
    icon: assets.contract,
    color: '#67c2fa',
    isSvg: true,
  },
  {
    title: 'Payroll Solutions',
    desc: 'There is no one-size-fits-all approach to recruitment, there must be a process tailored to the type of business and to...',
    icon: assets.laptop,
    color: '#19a483',
    isSvg: true,
  },
  {
    title: 'Rpo',
    desc: 'From start-ups to Fortune500 clients, we are staffing partner for a broad array of industries through our specialized service teams comprised...',
    icon: assets.talk,
    color: '#53b83a',
    isSvg: true,
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);

  const bannerImages = [
    assets.manufacturing,
    assets.technology,
    assets.hospitality,
    assets.life,
    assets.retail,
    assets.defence,
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bannerImages.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className='home-video-container'>
        <div className='home-video-inner'>
          <img
            src={bannerImages[currentImage]}
            alt='AdientOne Banner'
            className='home-banner-image'
            style={{ transition: 'opacity 0.5s ease-in-out' }}
          />
        </div>
        {/* <div className='home-logo-overlay'>
          <img src={assets.logo} alt='Logo' className='home-logo-img' />
        </div> */}
      </div>

      <section className='what-we-do-section'>
        <h2 className='what-we-do-heading'>What We Do</h2>
        <div className='what-we-do-cards'>
          {whatWeDoData.map((item, idx) => (
            <div
              className='what-we-do-card'
              key={item.title}
              style={{
                borderColor: item.color,
                animationDelay: `${idx * 0.12}s`,
              }}
              onClick={() => {
                if (item.title === 'Executive Search') {
                  navigate('/executive');
                }
                if (item.title === 'Permanent Hiring') {
                  navigate('/permanent');
                }
                if (item.title === 'Contingent Staffing') {
                  navigate('/contingent');
                }
                if (item.title === 'Contract to Hire') {
                  navigate('/contract');
                }
                if (item.title === 'Payroll Solutions') {
                  navigate('/payroll');
                }
                if (item.title === 'Rpo') {
                  navigate('/rpo');
                }
              }}>
              <div className='what-we-do-icon' style={{ color: item.color }}>
                {item.isSvg ? (
                  <img
                    src={item.icon}
                    alt={item.title + ' icon'}
                    style={{ height: '8.8rem', width: '8.8' }}
                  />
                ) : (
                  item.icon
                )}
              </div>
              <h3 className='what-we-do-title'>{item.title}</h3>
              <p className='what-we-do-desc'>{item.desc}</p>
              <button className='what-we-do-readmore'>Read More</button>
            </div>
          ))}
        </div>
      </section>
      <Experience />
      <section className='icon-row-section'>
        <h2 className='services-heading'>Services</h2>
        <p className='services-desc'>
          We offer a wide range of specialized services to meet the unique needs
          of every business. <br />
          Our expertise ensures you get the right talent and solutions for your
          growth.
        </p>
        <div className='icon-row'>
          <div className='icon-item'>
            <img src={assets.sourcing} alt='Coin' className='icon-img' />
            <span className='icon-label'>Talent Sourcing</span>
          </div>
          <div className='icon-item'>
            <img src={assets.screening} alt='Contract' className='icon-img' />
            <span className='icon-label'>Background Checks</span>
          </div>
          <div className='icon-item'>
            <img src={assets.payroll} alt='Laptop' className='icon-img' />
            <span className='icon-label'>Payroll & Invoicing</span>
          </div>
          <div className='icon-item'>
            <img src={assets.onboarding} alt='Permanent' className='icon-img' />
            <span className='icon-label'>Onboarding</span>
          </div>
        </div>
        <div className='icon-row'>
          <div className='icon-item'>
            <img src={assets.globe} alt='Search' className='icon-img' />
            <span className='icon-label'>Global Tax Compliance</span>
          </div>
          <div className='icon-item'>
            <img
              src={assets.classification}
              alt='Teamwork'
              className='icon-img'
            />
            <span className='icon-label'>IC Classification & Compliance</span>
          </div>
          <div className='icon-item'>
            <img src={assets.time} alt='Talk' className='icon-img' />
            <span className='icon-label'>Time Tracking</span>
          </div>
          <div className='icon-item'>
            <img src={assets.support} alt='Logo' className='icon-img' />
            <span className='icon-label'>Ongoing Support </span>
          </div>
        </div>
      </section>
      <div className='savings'>
        <div className='saving-grid'>
          <div className='saving-content'>
            <img
              src={assets.logow}
              alt='AdientOne Logo'
              className='saving-logo'
            />
            <h2 className='head'>Saving Money Through Direct Sourcing</h2>
            <p>
              A practical plan to help you reduce your contingent worker costs
              through Direct Sourcing.
            </p>
            <button className='saving-button'>Learn More</button>
          </div>
          <div className='saving-image-container'>
            <img src={assets.saving} alt='savings' className='saving-image' />
            <div className='saving-overlay'></div>
          </div>
        </div>
      </div>
      <Specific />

      {/* <section className='how-different-section'>
        <h2 className='how-different-heading'>How We Are Different</h2>
        <p className='how-different-desc'>
          There is no one-size-fits-all approach to recruitment, there must be a
          process tailored to the type of business and to the type of people the
          business wants to recruit. But at the same time, we believe that it is
          very important to develop a process-based system. Each and every task
          should be performed within the framework of the design. Keeping this
          as a rule, we have designed and developed a system which brings us
          close to our clients as well as leaders of the world.
        </p>
      </section> */}
      <div className='video-section'>
        <video className='background-video' autoPlay loop muted>
          <source src={assets.cloud} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        <div className='video-content'>
          <h2>Transform Your Workforce</h2>
          <p>Partner with us for innovative staffing solutions</p>
          {/* <button className='video-cta'>Learn More</button> */}
        </div>
      </div>

      <section className='excellence-section'>
        <div className='excellence-container'>
          <div className='excellence-content'>
            <h2 className='excellence-title'>
              Excellence in Every Partnership
            </h2>
            <p className='excellence-subtitle'>
              Delivering exceptional talent solutions that drive your business
              forward
            </p>
            <div className='excellence-features'>
              <div className='feature-item'>
                <div className='feature-icon'></div>
                <h3>Precision Matching</h3>
                <p>Advanced algorithms to find the perfect fit</p>
              </div>
              <div className='feature-item'>
                <div className='feature-icon'></div>
                <h3>Rapid Deployment</h3>
                <p>Quick turnaround for urgent staffing needs</p>
              </div>
              <div className='feature-item'>
                <div className='feature-icon'></div>
                <h3>Quality Assurance</h3>
                <p>Rigorous vetting for top-tier candidates</p>
              </div>
            </div>
          </div>
          <div className='excellence-animation'>
            <div className='floating-shapes'>
              <div className='shape shape-1'></div>
              <div className='shape shape-2'></div>
              <div className='shape shape-3'></div>
              <div className='shape shape-4'></div>
            </div>
          </div>
        </div>
      </section>
      <HowDifferent />
    </>
  );
};

export default Home;
