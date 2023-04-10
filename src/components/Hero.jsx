import React from 'react'
import { StyleHero } from './styles/Hero.styled'
import { FaGithub, FaMouse } from "react-icons/fa"

export const Hero = () => {
  return (
    <StyleHero>
    
    <div className='Hero-img'>
        <img src=".././images/hero-3.png" alt="" />
        {/* <h3 className='More-inf'><FaMouse/> <br/> &#8595;</h3> */}
    </div>
    
    <div className='Hero-dec'>
        <h1>前端 <span>設計</span></h1>
        <p>Transforming complex ideas into elegant and scalable front-end solutions.</p>
        <button>View My Work</button>
        <ul className='Hero-link'>
            <li><FaGithub/>GITHUB</li>
            <li>LINKEDIN</li>
        </ul>
    </div>
    
    </StyleHero>
    
)
}
