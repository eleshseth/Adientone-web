import React from 'react';
import './aboutus.css';





const AboutUs = () => (
  <>
    <div className='aboutus-container'>
      <h1>About AdientOne</h1>
      <p>
        AdientOne is a leading provider of workforce solutions, specializing in
        delivering top talent and innovative services to businesses across
        various industries. Our mission is to empower organizations by
        connecting them with skilled professionals who drive success and growth.
      </p>
      <h2>Our Vision</h2>
      <p>
        To be the preferred partner for workforce solutions, recognized for our
        commitment to excellence, integrity, and innovation.
      </p>
      <h2>Our Mission</h2>
      <p>
        To deliver exceptional talent and services that enable our clients to
        achieve their business objectives while fostering a culture of respect,
        diversity, and continuous improvement.
      </p>
      <h2>Why Choose AdientOne?</h2>
      <ul>
        <li>
          <strong>Expertise:</strong> Our team has extensive experience in
          workforce management and talent acquisition.
        </li>
        <li>
          <strong>Customized Solutions:</strong> We tailor our services to meet
          the unique needs of each client.
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
      <h2>Contact Us</h2>
      <p>
        Ready to partner with AdientOne? Contact us today to learn more about
        our workforce solutions and how we can help your business thrive.
      </p>
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
