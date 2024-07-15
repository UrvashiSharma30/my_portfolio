import React from 'react';
import './MobileNav.css';
import CV from '../../../assets/CV.pdf';

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <div className='mobile-menu-container'>
          {/* Use a button if this is not a navigable link */}
          <button className='portfolio' onClick={() => window.location.href = '#portfolio'}>Portfolio</button>
          <ul>
            <li>
              <a href="#profile-summary" className='menu-item'>Home</a>
            </li>
            <li>
              <a href="#skills" className='menu-item'>Skills</a>
            </li>
            <li>
              <a href="#experience" className='menu-item'>Work Experience</a>
            </li>
            <li>
              <a href="#projects" className='menu-item'>Projects</a>
            </li>
            <li>
              <a href="#contact-me" className='menu-item'>Contact Me</a>
            </li>
            <li>
              <a href={CV} download>
                <button className='resume-dowmload-button'>Resume</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MobileNav;
