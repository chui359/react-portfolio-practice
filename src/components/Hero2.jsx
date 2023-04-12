import React from 'react'
import { StyleHero } from './styles/Hero2.styled'
import { FaGithubSquare, FaGithub, FaLinkedin } from 'react-icons/fa'

function Hero2() {
  return (
    
    <StyleHero>
    
    <div className='Hero-contain'>
        <img className='hero-img' src=".././images/hero-3.png" alt="" />
        <ul>
            <li><h1>YUNCHENG <br/> <span>前端</span> 作品集</h1></li>
        </ul>
            {/* <h3 className='More-inf'><FaMouse/> <br/> &#8595;</h3> */}
    </div>
    
    {/*
    <div className='Hero-dec'>
        <h1>YUN CHENG <br/> <span>前端</span> 作品集</h1>
        <p>Transforming complex ideas into elegant and scalable front-end solutions.</p>
        <button className='dec-button'>View My Work</button>
        <ul className='Hero-link'>
            <li><FaGithub/>GITHUB</li>
            <li>LINKEDIN</li>
        </ul>
    </div>
    */}
    
    </StyleHero>

  )
}

export default Hero2