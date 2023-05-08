import React from 'react'
import { StyleHero } from './styles/Hero.styled'
import { FaGithub, FaLinkedinIn,FaDribbble,FaAngleDoubleRight,FaMouse,FaAngleDoubleDown } from 'react-icons/fa'

function Hero() {
  return (
    
    <StyleHero>
    

    <div className="home section" id='home'>
      <div className='home-container container grid'>
        <div className="home-content grid">
          <div className="home-social">
            <a href="https://www.linkedin.com/in/yun-cheng3590/" target='_blank' rel="noopener noreferrer" className='home-social-icon'>
              <FaLinkedinIn/>
            </a>
            <a href="https://yun-cheng-website.netlify.app" target='_blank' rel="noopener noreferrer" className='home-social-icon'>
              <FaDribbble/>
            </a>
            <a href="https://github.com/chui359" target='_blank' rel="noopener noreferrer" className='home-social-icon'>
              <FaGithub/>
            </a>
          </div>

          <div className="home-img">
            <div className='imgBx'>
              <img className='hero-img' src=".././images/cute-hero-head.png" alt="" />
            </div>
          </div>

          <div className="home-data">
            <h1 className="home-title">吳昀澄</h1>
            <h3 className="home-subtitle">軟體工程師</h3>
            <p className="home-description">嗨！歡迎來到我的個人網站。<br/>這裡有關於我的最新消息和網頁作品。</p>
            <a href="/#contact" className="button button-flex">
              聯繫我<FaAngleDoubleRight className='button-icon'/>
            </a>
          </div>
        </div>

        <div className="home-scroll">
          <a href="/#about" className="home-scroll-button button-flex">
          <FaMouse className='home-scroll-mouse'/>
          <span className='home-scroll-name'>下滑</span>
          <FaAngleDoubleDown className='home-scroll-arrow'/>
          </a>
        </div>
      </div>

      {/* 
      <div className='row'>
        <div className="imgBx">
          <img className='hero-img' src=".././images/cute-hero-head.png" alt="" />
        </div>

        <div className='hero-data'>
          <h1>Hi, I'm YUN CHENG</h1>
          <h3>Frontend developer</h3>
          <p>experience in hosipetal software engerneer</p>
          <button>Contact Me</button>
        </div>
      </div>
       */}
    </div>
    

    
    </StyleHero>

  )
}

export default Hero