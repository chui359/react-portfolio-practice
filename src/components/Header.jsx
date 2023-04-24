import React from 'react'
import { StyleHeader } from './styles/Header.styled'
import { FaBars, FaHome, FaUser, FaRegFileCode, FaCommentDots, FaTimes } from 'react-icons/fa'
import {Link} from 'react-scroll'


function Header() {

  const clickNav = () => {
    const nav = document.getElementById("navigation");
    const visibility = nav.getAttribute("data-visible");
    const bar = document.getElementById("bars")
    const barClose = document.getElementById("bar-close")

    if(visibility === "false"){
      nav.setAttribute("data-visible", true);
      bar.style.display = "none"
      barClose.style.display = "block"
    }
    else{
      nav.setAttribute("data-visible", false);
      bar.style.display = "block"
      barClose.style.display = "none"
    }
  }

  return (

    <StyleHeader>
    

    <div className='mobile-nav-toggle' aria-controls='navigation' aria-expanded='false' onClick={clickNav}>
      <span className='sr-only'>Menu</span>
      <FaBars className='bars' id='bars' />
      <FaTimes className='bar-close' id='bar-close'/>
    </div>

    <nav>
    <h3 className='logo'>YUN CHENG</h3>
    
    <div className='nav-manu'>
      <ul id='navigation' data-visible="false" className='navigation flex'>
        <li>
          <Link to="about" spy={true} smooth={true} offset={50} duration={500}  className='Link'>
            <span aria-hidden="true"><FaHome/></span>首頁
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true} offset={50} duration={500}  className='Link'>
            <span aria-hidden="true"><FaUser/></span>關於我
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
            <span aria-hidden="true"><FaRegFileCode/></span>專案
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
            <span aria-hidden="true"><FaCommentDots/></span>聯繫
          </Link>
        </li>
      </ul>
    </div>
    </nav>
  </StyleHeader>
  
  )
}

export default Header