import React from 'react'
import { StyleHero } from './styles/Hero3.styled'
import { FaGithubSquare, FaGithub, FaLinkedin } from 'react-icons/fa'

function Hero3() {
  return (
    
    <StyleHero>
    
    <div className='Hero-dec'>
        <h1 className='Hero-name'><span>YUN CHENG</span></h1>
        <h1 className='Hero-portfolio'>PORTFOLIO</h1>
        <p>Transforming complex ideas into elegant and scalable front-end solutions.</p>
        <button className='dec-button'>View My Work</button>
        <ul className='Hero-link'>
            <li><FaGithub/>GITHUB</li>
            <li>LINKEDIN</li>
        </ul>
    </div>
    
    </StyleHero>

  )
}

export default Hero3