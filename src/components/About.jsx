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
            <p>
            我是吳昀澄，目前在醫院擔任的軟體工程師。在工作上我主要使用C#、ASP.NET和SQL等語言開發醫院申報程式。</p>
            <br/>
            <p>除此之外，我也對網頁開發非常熱衷，經常利用下班時間學習和研究網頁相關的資訊，我非常享受開發出能夠協助自己與他人的作品時的成就感。</p>
            <br/>
            <p className="about-description">除了工作，我還有電繪和籃球的個人興趣，這些活動可以幫助我放鬆身心，保持身體健康。我相信身心健康對於工作效率和創造力非常重要，因此我一直努力保持工作和生活的平衡。</p>

            {/* <div className="about-info">
              <div>
                <span className='about-info-title'>08+</span>
                <span className='about-info-name'>Years <br/> experience</span>
              </div>

              <div>
                <span className='about-info-title'>03+</span>
                <span className='about-info-name'>個人作品</span>
              </div>

              <div>
                <span className='about-info-title'>05+</span>
                <span className='about-info-name'>Companies <br/> worked</span>
              </div>
            </div> */}
            
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