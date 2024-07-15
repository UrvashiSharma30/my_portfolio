import React from 'react';
import './MobileNav.css';
import CV from '../../../assets/CV.pdf';

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <div className='mobile-menu-container'>
          <a className='portfolio'>Portfolio</a>
          <ul>
            <li>
              <a className='menu-item' href="#profile-summary">Home</a>
            </li>
            <li>
              <a className='menu-item' href="#skills">Skills</a>
            </li>
            <li>
              <a className='menu-item' href="#experience">Work Experience</a>
            </li>
            <li>
              <a className='menu-item' href="#projects">Projects</a>
            </li>
            <li>
              <a className='menu-item' href="#contact-me">Contact Me</a>
            </li>
            <a href={CV} download>
              <button className='resume-dowmload-button'>Resume</button>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MobileNav;
