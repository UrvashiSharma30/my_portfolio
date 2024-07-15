import React, { useState } from 'react';
import './NavBar.css';
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import MobileNav from './MobileNav/MobileNav';
import CV from '../../assets/CV.pdf';

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <a className='portfolio'>Portfolio</a>
          <ul>
            <li>
              <a className='menu-item' href="#profile-summary">About</a>
            </li>
            <li>
              <a className='menu-item' href="#skills">Skills</a>
            </li>
            <li>
              <a className='menu-item' href="#experience">Experience</a>
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
          <button className="menu-btn" onClick={toggleMenu}>
            {openMenu ? <IoMdClose /> : <IoMenu />}
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
