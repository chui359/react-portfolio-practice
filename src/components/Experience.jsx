import React from 'react'
import { StyleExperience } from './styles/Experience'
import { FaUserGraduate, FaUserTie, FaRegCalendarAlt } from 'react-icons/fa'

function Experience() {

    const ShowEducation = () => {
        const education = document.getElementById('education');
        const showEducation = education.getAttribute('show-content');
        const work = document.getElementById('work');
        const btnEducation = document.getElementById('button-education');
        const btnWork = document.getElementById('button-work');

        if(showEducation === 'false'){
            education.setAttribute('show-content', true);
            work.setAttribute('show-content', false);
            btnEducation.setAttribute('show-color', true);
            btnWork.setAttribute('show-color', false)
        }
    }

    const ShowWork = () => {
        const education = document.getElementById('education');
        const work = document.getElementById('work');
        const showWork = work.getAttribute('show-content');
        const btnWork = document.getElementById('button-work');
        const btnEducation = document.getElementById('button-education');

        if(showWork === 'false'){
            education.setAttribute('show-content', false);
            work.setAttribute('show-content', true);
            btnEducation.setAttribute('show-color', false);
            btnWork.setAttribute('show-color', true)
        }
    }

  return (
    <StyleExperience>
        <div className="experience section" id='experience'>
            <h2 className="section-title">經歷</h2>
            <span className="section-subtitle">My personal journey</span>

            <div className="experience-container container">
                <div className="experience-tabs">
                    <div className="experience-button button-flex" id='button-education' show-color="true" onClick={ShowEducation}>
                        <FaUserGraduate className='experience-icon'/>學歷
                    </div>
                    <div className="experience-button button-flex" id='button-work' show-color="false" onClick={ShowWork}>
                        <FaUserTie className='experience-icon'/>工作
                    </div>
                </div>

                <div className="experience-section">
                    {/* experience content 1 */}
                    <div className="experience-content" show-content="true" id='education'>
                        {/* experience 1 */}
                        <div className="experience-data">
                            <div>
                                <h3 className="experience-title">資訊管理學系|學士</h3>
                                <span className="experience-subtitle">南華大學</span>
                                <div className="experience-calendar">
                                    <FaRegCalendarAlt className='calendar-icon'/>2016-2019
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
                                <h3 className="experience-title">醫療資訊管理學系|碩士</h3>
                                <span className="experience-subtitle">國立中正大學</span>
                                <div className="experience-calendar">
                                    <FaRegCalendarAlt className='calendar-icon'/>2017-2021
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* experience content 2 */}
                    <div className="experience-content" show-content="false" id='work'>
                        {/* experience 1 */}
                        <div className="experience-data">
                            <div>
                                <h3 className="experience-title">軟體工程師(申報組)</h3>
                                <span className="experience-subtitle">光田綜合醫院</span>
                                <div className="experience-calendar">
                                    <FaRegCalendarAlt className='calendar-icon'/>2017-2021
                                </div>
                            </div>

                            <div>
                                <span className="experience-rounder"></span>
                                <span className="experience-line"></span>
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