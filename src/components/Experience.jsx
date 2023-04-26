import React from 'react'
import { StyleExperience } from './styles/Experience'
import { FaUserGraduate, FaUserTie, FaRegCalendarAlt } from 'react-icons/fa'

function Experience() {

    const ShowEducation = () => {
        const education = document.getElementById('education');
        const showEducation = education.getAttribute('show-content');
        const work = document.getElementById('work');

        if(showEducation === 'false'){
            education.setAttribute('show-content', true);
            work.setAttribute('show-content', false);
        }
    }

    const ShowWork = () => {
        const education = document.getElementById('education');
        const work = document.getElementById('work');
        const showWork = work.getAttribute('show-content');

        if(showWork === 'false'){
            education.setAttribute('show-content', false);
            work.setAttribute('show-content', true);
        }
    }

  return (
    <StyleExperience>
        <div className="experience section">
            <h2 className="section-title">Experience</h2>
            <span className="section-subtitle">My personal journey</span>

            <div className="experience-container container">
                <div className="experience-tabs">
                    <div className="experience-button button-flex" onClick={ShowEducation}>
                        <FaUserGraduate className='experience-icon'/>Education
                    </div>
                    <div className="experience-button button-flex" onClick={ShowWork}>
                        <FaUserTie className='experience-icon'/>Work
                    </div>
                </div>

                <div className="experience-section">
                    {/* experience content 1 */}
                    <div className="experience-content" show-content="true" id='education'>
                        {/* experience 1 */}
                        <div className="experience-data">
                            <div>
                                <h3 className="experience-title">Computer Enginner</h3>
                                <span className="experience-subtitle">南華大學</span>
                                <div className="experience-calendar">
                                    <FaRegCalendarAlt/>2017-2021
                                </div>
                            </div>

                            <div>
                                <span className="experience-rounder"></span>
                                <span className="experience-line"></span>
                            </div>
                        </div>

                        {/* experience 2 */}
                        <div className="experience-data">
                            <div></div>

                            <div>
                                <span className="experience-rounder"></span>
                                <span className="experience-line"></span>
                            </div>

                            <div>
                                <h3 className="experience-title">Web design</h3>
                                <span className="experience-subtitle">南華大學</span>
                                <div className="experience-calendar">
                                    <FaRegCalendarAlt/>2017-2021
                                </div>
                            </div>
                        </div>

                        {/* experience 3 */}
                        <div className="experience-data">
                            <div>
                                <h3 className="experience-title">Computer Enginner</h3>
                                <span className="experience-subtitle">南華大學</span>
                                <div className="experience-calendar">
                                    <FaRegCalendarAlt/>2017-2021
                                </div>
                            </div>

                            <div>
                                <span className="experience-rounder"></span>
                                <span className="experience-line"></span>
                            </div>
                        </div>
                    </div>

                    {/* experience content 2 */}
                    <div className="experience-content" show-content="false" id='work'>
                        {/* experience 1 */}
                        <div className="experience-data">
                            <div>
                                <h3 className="experience-title">Software Enginner</h3>
                                <span className="experience-subtitle">光田醫院</span>
                                <div className="experience-calendar">
                                    <FaRegCalendarAlt/>2017-2021
                                </div>
                            </div>

                            <div>
                                <span className="experience-rounder"></span>
                                <span className="experience-line"></span>
                            </div>
                        </div>

                        {/* experience 2 */}
                        <div className="experience-data">
                            <div></div>

                            <div>
                                <span className="experience-rounder"></span>
                                <span className="experience-line"></span>
                            </div>

                            <div>
                                <h3 className="experience-title">Web design</h3>
                                <span className="experience-subtitle">南華大學</span>
                                <div className="experience-calendar">
                                    <FaRegCalendarAlt/>2017-2021
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </StyleExperience>
  )
}

export default Experience