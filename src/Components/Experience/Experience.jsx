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
        <section className='experience' id='experience'>
            <span class="section-title">Experience </span>
            <div className='experience-container'>
                <div className='tools-container'>
                    <div className='tools-used'>
                        <div className='icons'><img src={icon1} className='icon-image' alt='reactjs' /> </div>
                        <div className='icons'><img src={icon2} className='icon-image' alt='typescript' /> </div>
                        <div className='icons'><img src={icon3} className='icon-image' alt='css' /> </div>
                        <div className='icons'><img src={icon4} className='icon-image' alt='reduxsaga' /> </div>
                        <div className='icons'><img src={icon5} className='icon-image' alt='git' /> </div>
                        <div className='icons'><img src={icon6} className='icon-image' alt='trello' /> </div>
                        <div className='icons'><img src={icon7} className='icon-image' alt='figma' /> </div>
                    </div>
                </div>
                <div className="work-experience">
                    <div className="experience-card">
                        <h3>Graduate Engineering Intern at Nineleaps</h3>
                        <p className="date">Feb 2023 - Oct 2023</p>
                        <ul>
                            <li>Developed an Expense Management mobile application using React Native, REDUX-SAGA, typescript and CSS.</li>
                            <li>Adhered to well-established coding style guides like TSLint and Prettier, using meaningful variable and function
                                names to maintain code consistency and readability.</li>
                            <li>Conducted rigorous unit testing with Jest for bug identification and resolution, ensuring the app’s reliability and
                                stability.And also executed SonarQube testing .</li>
                            <li> Employed Git for change tracking and effective team collaboration.  Collaborated closely with the team on the development of an expense management
                                application.
                            </li>
                            <li> Maintained comprehensive project documentation through Trello board. Implemented Agile methodologies throughout.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Experience
