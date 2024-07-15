import React from 'react'
import './Experience.css'
import icon1 from '../../assets/images/reactIcon.png'
import icon2 from '../../assets/images/typescript.png'
import icon3 from '../../assets/images/cssIcon.png'
import icon4 from '../../assets/images/reduxSaga.png'
import icon5 from '../../assets/images/githubIcon.png'
import icon6 from '../../assets/images/trello.png'
import icon7 from '../../assets/images/figma.png'



const Experience = () => {
    return (
        <>
            <h5>Work Experience</h5>
            <div className='experience-container'>

                <div className='tools-used'>
                    <div className='icons'><img src={icon1} className='icon-image' alt=''/> </div>
                    <div className='icons'><img src={icon2} className='icon-image' alt=''/> </div>
                    <div className='icons'><img src={icon3} className='icon-image' alt=''/> </div>
                    <div className='icons'><img src={icon4} className='icon-image'alt=''/> </div>
                    <div className='icons'><img src={icon5} className='icon-image' alt='' /> </div>
                    <div className='icons'><img src={icon6} className='icon-image' alt=''/> </div>
                    <div className='icons'><img src={icon7} className='icon-image' alt=''/> </div>

                </div>
                <div className="work-experience">
                    <div className="experience-card">
                        <h3>Graduate Engineering Intern at Nineleaps</h3>
                        <p className="date">Feb 2023 - Oct 2023</p>
                        <ul>
                            <li>Developed and implemented a highly responsive user interface for a React-Native mobile application using React
                                Native, REDUX-SAGA, typescript and CSS; enhanced user experience resulting in a 40% in user engagement.</li>
                            <li>Adhered to well-established coding style guides like TSLint and Prettier, using meaningful variable and function
                                names to maintain code consistency and readability, achieving 100% compliance with style guidelines.</li>
                            <li>Conducted rigorous unit testing with Jest for bug identification and resolution, ensuring the app’s reliability and
                                stability with a 95% bug resolution rate. Executed SonarQube testing to uphold code quality standards with a
                                90% code quality score.</li>
                            <li> Employed Git for change tracking and effective team collaboration, contributing to a 30% improvement in
                                development efficiency. Collaborated closely with the team on the development of an expense management
                                application.
                            </li>
                            <li> Maintained comprehensive project documentation through Trello board, leading to a 25% increase in project
                                transparency and tracking. Implemented Agile methodologies throughout the project development process,
                                resulting in a 20% reduction in development time.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Experience
