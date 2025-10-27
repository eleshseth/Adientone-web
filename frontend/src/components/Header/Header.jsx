import React, { useState } from 'react';
import './Header.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

// #0091ff
// #53b83a
// #82d46d
// #67c2fa
// #19a483

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className='header-container'>
      <div className='logo'>
        <img src={assets.logo} alt='Logo' />
      </div>
      <button className='menu-btn' onClick={handleMenuToggle} aria-label='Menu'>
        &#9776;
      </button>
      <div className={`navlinks${menuOpen ? ' open' : ''}`}>
        <Link to='/' onClick={handleNavClick}>
          Home
        </Link>
        <Link to='/about' onClick={handleNavClick}>
          About
        </Link>
        <div className='navlink-dropdown'>
          <a href='#services' onClick={handleNavClick}>
            Services
          </a>
          <div className='dropdown-content'>
            <a href='/executive' onClick={handleNavClick}>
              Executive Search
            </a>
            <a href='/permanent' onClick={handleNavClick}>
              Permanent Hiring
            </a>
            <a href='/contingent' onClick={handleNavClick}>
              Contingent Staffing
            </a>
            <a href='/contract' onClick={handleNavClick}>
              Contract To Hire
            </a>
            <a href='/payroll' onClick={handleNavClick}>
              Payroll Solutions
            </a>
            <a href='/rpo' onClick={handleNavClick}>
              RPO
            </a>
          </div>
        </div>
        <div className='navlink-dropdown'>
          <a href='#industries' onClick={handleNavClick}>
            Industries
          </a>
          <div className='dropdown-content'>
            <a href='/manufacturing' onClick={handleNavClick}>
              Manufacturing & Engineering
            </a>
            <a href='/lightindustrial' onClick={handleNavClick}>
              Light Industrial
            </a>
            <a href='/technology' onClick={handleNavClick}>
              Technology Recruitment
            </a>
            <a href='/aerospace' onClick={handleNavClick}>
              Aerospace & Defense
            </a>
            <a href='/retail' onClick={handleNavClick}>
              Retail
            </a>
            <a href='/telecommunication' onClick={handleNavClick}>
              Telecommunications
            </a>
            <a href='/hospitality' onClick={handleNavClick}>
              Hospitality
            </a>
            <a href='/pharmaceutical' onClick={handleNavClick}>
              Pharmaceutical / Life Sciences – Clinical Recruitment
            </a>
            <a href='/publicsector' onClick={handleNavClick}>
              Public Sector
            </a>
            <a href='/financeservice' onClick={handleNavClick}>
              Finance Service Recruitment
            </a>
          </div>
        </div>
        <Link to='/career' onClick={handleNavClick}>
          Career
        </Link>
       
        <div className='navlink-dropdown'>
          <Link to='/contact' onClick={handleNavClick}>
            Contact
          </Link>
          <div className='dropdown-content'>
            <a href='#email' onClick={handleNavClick}>
              Email
            </a>
            <a href='#location' onClick={handleNavClick}>
              Location
            </a>
          </div>
        </div>
      </div>
      <div className='button'>
        <Link to='/jobhire' style={{ color: '#fff', textDecoration: 'none' }}>
          Find Job
        </Link>
      </div>
    </div>
  );
};

export default Header;
