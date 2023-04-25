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
            <a href="/#" className='home-social-icon'>
              <FaLinkedinIn/>
            </a>
            <a href="/#" className='home-social-icon'>
              <FaDribbble/>
            </a>
            <a href="/#" className='home-social-icon'>
              <FaGithub/>
            </a>
          </div>

          <div className="home-img">
            <div className='imgBx'>
              <img className='hero-img' src=".././images/cute-hero-head.png" alt="" />
            </div>
          </div>

          <div className="home-data">
            <h1 className="home-title">Hi, I'm YUN CHENG</h1>
            <h3 className="home-subtitle">Frontend developer</h3>
            <p className="home-description">home-description</p>
            <a href="/#" className="button button-flex">
              Contact Me<FaAngleDoubleRight className='button-icon'/>
            </a>
          </div>
        </div>

        <div className="home-scroll">
          <a href="/#about" className="home-scroll-button button-flex">
          <FaMouse className='home-scroll-mouse'/>
          <span className='home-scroll-name'>Scroll down</span>
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