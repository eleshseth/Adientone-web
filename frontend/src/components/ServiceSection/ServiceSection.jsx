import React from 'react';
import { assets } from '../../assets/assets';
import "../../Pages/Home/home.css";

const ServiceSection = () => (
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
        <img src={assets.classification} alt='Teamwork' className='icon-img' />
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
);

export default ServiceSection;
