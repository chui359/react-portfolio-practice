import React from 'react'
import { StyleAbout } from './styles/AboutMe.styled'
import { Container } from './styles/Container.styled'

function AboutMe() {

  var tablinks = document.getElementsByClassName("tab-links")
  var tabcontents = document.getElementsByClassName("tab-contents")

  const Opentab = (e, tabname) => {
    for(let tablink of tablinks){
      tablink.classList.remove('active-link');
    }
    for(let tabcontent of tabcontents){
      tabcontent.classList.remove('active-tab');
    }
    e.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
    
  }

  return (
    
    <StyleAbout>
    <Container>

    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
          <img src=".././images/sitting2.png" alt="" />
          </div>
          <div className="about-col-2">
            <h1 className='sub-title'>About Me</h1>
            <p>I'm a Frontend Web developer, working in web development industry for over 3 years. I'm dedicated to developing & optimizing interactive, user-friendly, and feature rich websites and applications. I'm also proficient in troubleshooting complex issues, and implementing new features. If you are a business seeking a web presence or an employer looking to hire, feel free to get in touch.</p>

            <div className="tab-title">
              <p className='tab-links active-link' onClick={(e) => Opentab(e, 'skills')}>Skills</p>
              <p className='tab-links' onClick={(e) => Opentab(e, 'experience')}>Experience</p>
              <p className='tab-links' onClick={(e) => Opentab(e, 'education')}>Education</p>
            </div>
            <div className="tab-contents active-tab" id='skills'>
              <ul>
                <li><span>UI/UX</span><br/>Designing Web interfaces</li>
                <li><span>Frontend Development</span><br/>Web app development</li>
              </ul>
            </div>
            <div className="tab-contents" id='experience'>
              <ul>
                <li><span>UI/UX</span><br/>Designing Web interfaces</li>
                <li><span>Frontend Development</span><br/>Web app development</li>
              </ul>
            </div>
            <div className="tab-contents" id='education'>
              <ul>
                <li><span>UI/UX</span><br/>Designing Web interfaces</li>
                <li><span>Frontend Development</span><br/>Web app development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    </Container>
    </StyleAbout>
  )
}

export default AboutMe