import React from 'react'
import { StyledAbout } from './styles/About'
import { FaFileDownload } from 'react-icons/fa'

function About() {
  return (
    <StyledAbout>
      <div className="about section" id='about'>
        <h2 className="section-title">關於我</h2>
        <span className="section-subtitle">My Introduction</span>
        <div className="about-container container grid">
          <img src=".././images/sitting2.png" alt="" className='about-img' />

          <div className="about-data">
            <p className="about-description">
            我是吳昀澄，是一位在醫院工作的程式設計師，主要使用C#、ASP.NET和SQL等程式語言開發醫院申報程式。
            </p>
            <div className="about-info">
              <div>
                <span className='about-info-title'>08+</span>
                <span className='about-info-name'>Years <br/> experience</span>
              </div>

              <div>
                <span className='about-info-title'>08+</span>
                <span className='about-info-name'>Completed <br/> project</span>
              </div>

              <div>
                <span className='about-info-title'>05+</span>
                <span className='about-info-name'>Companies <br/> worked</span>
              </div>
            </div>
            
            <div className="about-buttons">
              <a href="/#" className="button button-flex">
              Download CV<FaFileDownload className='button-icon'/>
              </a>
            </div>

          </div>
        </div>
      </div>
    </StyledAbout>
    
  )
}

export default About