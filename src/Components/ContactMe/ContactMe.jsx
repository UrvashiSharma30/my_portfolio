import React from 'react';
import './ContactMe.css';
import { MdOutlineMailOutline } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa"; 
import ContactForm from './ContactForm/ContactForm';

const ContactMe = () => {
    return (
        <section className='contact-container' id='contact-me'>
            <span class="section-title">Contact Me</span>
            <div className='contact-content'>
                <div style={{ flex: 1 }} className='contact-details'>
                    <div className='social'>
                        <div className='icon'>
                            <MdOutlineMailOutline className='emailIcon' />
                        </div>
                        <a href='mailto:urvashi.8520@gmail.com'>urvashi.8520@gmail.com</a>
                    </div>
                    <div className='social'>
                        <div className='icon'>
                            <FaGithub className='githubIcon' />
                        </div>
                        <a href='https://github.com/UrvashiSharma30' target="_blank" rel="noopener noreferrer">Github/UrvashiSharma30</a>
                    </div>
                    <div className='social'>
                        <div className='icon'>
                            <FaLinkedin className='linkedinIcon' />
                        </div>
                        <a href='https://www.linkedin.com/in/urvashi-sharma-09036a1ba/' target="_blank" rel="noopener noreferrer">LinkedIn/Urvashi-Sharma</a>
                    </div>
                </div>
                <div style={{ flex: 1 }} className='contactform'>
                    <ContactForm/>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;
