import React from 'react'
import './ProfileSummary.css'
import reactImage from '../../assets/images/reactIcon.png'
import htmlImage from '../../assets/images/htmlIcon.png'
import profileImage from '../../assets/images/photo2.jpg'
import cssImage from '../../assets/images/cssIcon.png'
import javascriptImage from '../../assets/images/jsIcon.png'
const ProfileSummary = () => {
    return (
        <section className='profile-summary-container' id='profile-summary'>
            <div className='profile-summary-content'>
                <h2 className='name'>Hi, I am Urvashi</h2>
                <h3 className='intro'>Building Digital Experiences That Inspire</h3>
                <p className='para'>
                    Passionate Frontend Developer | Transforming Ideas into Seamless and Visually Stunning Web Solutions
                </p>
            </div>
            <div className="profile-img">
                <div>
                    <div className="tech-icon">
                        <img src={reactImage} alt="reactIcon" />
                    </div>
                    <img src={profileImage} alt="" className='photo' />
                </div>
                <div className='tech-icon-list'>
                    <div className="tech-icon">
                        <img src={javascriptImage} alt="" className="js" />
                    </div>
                    <div className="tech-icon">
                        <img src={cssImage} alt="" className="css" />
                    </div>
                    <div className="tech-icon">
                        <img src={htmlImage} alt="" className='html'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProfileSummary
