import React from 'react'
import { StyledSkill } from './styles/Skill'
import { FaCode, FaAngleDown,FaServer,FaSwatchbook } from 'react-icons/fa'

function Skill() {

    const ShowSkills = (e) => {
        const itemClass = e.currentTarget.getAttribute("skills-open");
        if(itemClass === "true"){
            e.currentTarget.setAttribute("skills-open", false);
        }
        else{
            e.currentTarget.setAttribute("skills-open", true);
        }
    }
  return (
    <StyledSkill>
        <div className="skills section" id='skills'>
            <h2 className="section-title">Skills</h2>
            <span className="section-subtitle">My technical skills</span>
            <div className="skills-container container grid">
                    {/* skill 1 */}
                    <div className="skills-content" skills-open="true" onClick={ShowSkills}>
                        <div className="skills-header">
                            <FaCode className='skills-icon'/>

                            <div>
                                <h1 className="skills-title">Frontend developer</h1>
                                <span className="skills-subtitle">More then 4 years</span>
                            </div>

                            <FaAngleDown className='skills-arrow'/>
                        </div>

                        <div className="skills-list grid">
                            <div className="skills-data">
                                <div className="skills-title">
                                    <h3 className="skills-name">HTML</h3>
                                </div>
                            </div>

                            <div className="skills-data">
                                <div className="skills-title">
                                    <h3 className="skills-name">CSS</h3>
                                </div>
                            </div>

                            <div className="skills-data">
                                <div className="skills-title">
                                    <h3 className="skills-name">JavaScript</h3>
                                </div>
                            </div>

                            <div className="skills-data">
                                <div className="skills-title">
                                    <h3 className="skills-name">React</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* skill 2 */}
                    <div className="skills-content" skills-open="false" onClick={ShowSkills}>
                        <div className="skills-header">
                            <FaServer className='skills-icon'/>

                            <div>
                                <h1 className="skills-title">Backend developer</h1>
                                <span className="skills-subtitle">More then 4 years</span>
                            </div>

                            <FaAngleDown className='skills-arrow'/>
                        </div>

                        <div className="skills-list grid">
                            <div className="skills-data">
                                <div className="skills-title">
                                    <h3 className="skills-name">Node.js</h3>
                                </div>
                            </div>

                            <div className="skills-data">
                                <div className="skills-title">
                                    <h3 className="skills-name">MongoDB</h3>
                                </div>
                            </div>
                            <div className="skills-data">
                                <div className="skills-title">
                                    <h3 className="skills-name">Express</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* skill 3 */}
                    <div className="skills-content" skills-open="false" onClick={ShowSkills}>
                        <div className="skills-header">
                            <FaSwatchbook className='skills-icon'/>

                            <div>
                                <h1 className="skills-title">Designer</h1>
                                <span className="skills-subtitle">More then 4 years</span>
                            </div>

                            <FaAngleDown className='skills-arrow'/>
                        </div>

                        <div className="skills-list grid">
                            <div className="skills-data">
                                <div className="skills-title">
                                    <h3 className="skills-name">Node.js</h3>
                                </div>
                            </div>

                            <div className="skills-data">
                                <div className="skills-title">
                                    <h3 className="skills-name">MongoDB</h3>
                                </div>
                            </div>
                            <div className="skills-data">
                                <div className="skills-title">
                                    <h3 className="skills-name">Express</h3>
                                </div>
                            </div>

                        </div>
                    </div>
            </div>
        </div>
    </StyledSkill>
  )
}

export default Skill