import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='footer-main'>
        <div className='footer-logo-section'>
          <img src={logo} alt='Logo' className='footer-main-logo' />

          <p className='footer-tagline'>
            Empowering Excellence. Connecting Talent with Tomorrow’s Success
            Stories.
          </p>
          <div className='footer-social'>
            <a href='#' aria-label='Twitter'>
              <i className='fab fa-twitter'></i>
            </a>
            <a href='#' aria-label='Facebook'>
              <i className='fab fa-facebook'></i>
            </a>
            <a href='#' aria-label='Instagram'>
              <i className='fab fa-instagram'></i>
            </a>
            <a href='#' aria-label='YouTube'>
              <i className='fab fa-youtube'></i>
            </a>
          </div>
        </div>
        <div className='footer-links'>
          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <a href='#'>About</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li>
                <a href='#'>Executive Search</a>
              </li>
              <li>
                <a href='#'>Permanent Hiring</a>
              </li>
              <li>
                <a href='#'>Contingent Staffing</a>
              </li>
              <li>
                <a href='#'>Contract to Hire</a>
              </li>
              <li>
                <a href='#'>Payroll Solutions</a>
              </li>
              <li>
                <a href='#'>RPO</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Industries</h4>
            <ul>
              <li>
                <a href='/manufacturing'>Manufacturing & Engineering</a>
              </li>
              <li>
                <a href='/lightindustrial'>Light Industrial</a>
              </li>
              <li>
                <a href='/technology'>Technology Recruitment</a>
              </li>
              <li>
                <a href='/aerospace'>Aerospace & Defense</a>
              </li>
              <li>
                <a href='/retail'>Retail</a>
              </li>
              <li>
                <a href='/telecommunication'>Telecommunications</a>
              </li>
              <li>
                <a href='/hospitality'>Hospitality</a>
              </li>
              <li>
                <a href='/pharmaceutical'>Pharmaceutical / Life Sciences</a>
              </li>
              <li>
                <a href='/publicsector'>Public Sector</a>
              </li>
              <li>
                <a href='/financeservice'>Finance Service Recruitment</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>
                <a href='#'>Get in Touch</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Locations</h4>
            <div className='location-flags'>
              <div className='flag-item'>
                <img src={assets.usa} alt='USA' className='flag-icon' />
                <span className='flag-label'>USA</span>
              </div>
              <div className='flag-item'>
                <img src={assets.canada} alt='Canada' className='flag-icon' />
                <span className='flag-label'>Canada</span>
              </div>
            </div>
            <div className='linkedin-section'>
              <p className='linkedin-tagline'>Connect with us on LinkedIn</p>
              <a href='#' aria-label='LinkedIn'>
                <img
                  src={assets.linkedin}
                  alt='LinkedIn'
                  className='social-icon'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <span>
          &copy; {new Date().getFullYear()} Adientone. All rights reserved
          @Powered by MarketMinds Digital Solutions
        </span>
        <span className='footer-policy-links'>
          <a href='#'>Privacy Policy</a> | <a href='#'>Terms of Service</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
