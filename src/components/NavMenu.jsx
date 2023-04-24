import React from 'react'
import { StyleNav } from './styles/NavMenu'
import { FaBars, FaHome, FaUser, FaRegFileCode, FaCommentDots, FaRegImage, FaTimes, FaListUl } from 'react-icons/fa'

function NavMenu() {
    
const OpenMenu = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.setAttribute("show-menu", true);
}

const CloseMenu = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.setAttribute("show-menu", false);
}

const LinkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.setAttribute("show-menu", false);
}
    
  return (
    <StyleNav>
    <nav className="nav container" id='nav'>
        <a href="/#" className="nav-logo">YUN CHENG</a>

        <div className="nav-menu" id="nav-menu">
            <ul className="nav-list grid">
                <li className="nav-item">
                    <a href="/#" className="nav-link" onClick={LinkAction}>
                        <FaHome className='nav-icon'/>Home
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/#" className="nav-link" onClick={LinkAction}>
                        <FaUser className='nav-icon'/>About
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/#" className="nav-link" onClick={LinkAction}>
                        <FaRegFileCode className='nav-icon'/>Skills
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/#" className="nav-link" onClick={LinkAction}>
                        <FaRegImage className='nav-icon'/>Portfolio
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/#" className="nav-link" onClick={LinkAction}>
                        <FaCommentDots className='nav-icon'/>Contackme
                    </a>
                </li>
            </ul>
            <FaTimes className='nav-close' id='nav-close' onClick={CloseMenu}/>
        </div>

        <div className="nav-btns">
            <div className="nav-toggle" id="nav-toggle" onClick={OpenMenu}>
                <FaListUl/>
            </div>
        </div>
    </nav>
    </StyleNav>
  )
}

export default NavMenu