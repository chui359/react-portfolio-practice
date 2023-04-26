import React from 'react'
import { StyleNav } from './styles/NavMenu'
import { FaHome, FaUser, FaRegFileCode, FaCommentDots, FaRegImage, FaTimes, FaTable, FaArrowUp,FaMoon } from 'react-icons/fa'
import { useEffect,useState } from 'react'

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

// dark/light mode button
const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light-theme'
    );
    const toggleTheme = () => {
        if (theme === 'light-theme') {
        setTheme('dark-theme');
        } 
        else {
        setTheme('light-theme');
        }
    };
    useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
    }, [theme]);


// check scroll, show scroll up button, show nav box-shadow
const [scrollDir, setScrollDir] = useState("");

useEffect(() => {
    let ticking = false;
    const nav = document.getElementById('scroll-header');
    const scrollup = document.getElementById('scrollup')

    const updateScrollDir = () => {
    const scrollY = window.pageYOffset;

    setScrollDir(scrollY);
    if(scrollY >= 200){
        nav.setAttribute("scroll-header", true);
        scrollup.setAttribute("show-scrollup", true);
    } else{
        nav.setAttribute("scroll-header", false);
        scrollup.setAttribute("show-scrollup", false);
    }
    ticking = false;
    };

    const onScroll = () => {
        if (!ticking) {
            window.requestAnimationFrame(updateScrollDir);
            ticking = true;
        }
    };

    window.addEventListener("scroll", onScroll);
    // console.log(scrollDir);

    return () => window.removeEventListener("scroll", onScroll);
}, [scrollDir]);

return (
    <StyleNav>
    <div className='scroll-header' id='scroll-header'>
    <nav className="nav container" id='nav'>
        <a href="/#" className="nav-logo">YUN CHENG</a>

        <div className="nav-menu" id="nav-menu">
            <ul className="nav-list grid">
                <li className="nav-item">
                    <a href="/#home" className="nav-link" onClick={LinkAction}>
                        <FaHome className='nav-icon'/>Home
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/#about" className="nav-link" onClick={LinkAction}>
                        <FaUser className='nav-icon'/>About
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/#skills" className="nav-link" onClick={LinkAction}>
                        <FaRegFileCode className='nav-icon'/>Skills
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/#portfolio" className="nav-link" onClick={LinkAction}>
                        <FaRegImage className='nav-icon'/>Portfolio
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/#contact" className="nav-link" onClick={LinkAction}>
                        <FaCommentDots className='nav-icon'/>Contackme
                    </a>
                </li>
            </ul>
            <FaTimes className='nav-close' id='nav-close' onClick={CloseMenu}/>
        </div>

        <div className="nav-btns">
            {/* theme change */}
                <FaMoon className='change-theme' id='theme-button' onClick={toggleTheme}/>
            <div className="nav-toggle" id="nav-toggle" onClick={OpenMenu}>
                <FaTable/>
            </div>
        </div>
    </nav>
    </div>

    {/* scroll top */}
    <a href="/#" className='scrollup' id='scrollup'>
        <FaArrowUp className='scrollup-icon'/>
    </a>
    </StyleNav>
  )
}

export default NavMenu