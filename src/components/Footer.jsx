import React from 'react'
import { StyleFooter } from './styles/Footer'
import { FaFacebookF,FaInstagram,FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <StyleFooter>
        <div className="footer">
            <div className="footer-bg">
                <div className="footer-container container grid">
                    <div>
                        <h1 className="footer-title">YUN CHENG</h1>
                        <span className="footer-subtitle">Frontend developer</span>
                    </div>

                    <ul className="footer-links">
                        <li>
                            <a href="/#" className="footer-links">Home</a>
                        </li>
                        <li>
                            <a href="/#" className="footer-links">Portfolio</a>
                        </li>
                        <li>
                            <a href="/#" className="footer-links">Contactme</a>
                        </li>
                    </ul>

                    <div className="footer-socials">
                        <a href="/#" target='_blank' className="footer-social">
                            <FaFacebookF/>
                        </a>
                        <a href="/#" target='_blank' className="footer-social">
                            <FaInstagram/>
                        </a>
                        <a href="/#" target='_blank' className="footer-social">
                            <FaTwitter/>
                        </a>
                    </div>
                </div>

                <p className="footer-copy">&#169; YUN CHENG. All right reserved</p>
            </div>
        </div>

    </StyleFooter>
  )
}

export default Footer