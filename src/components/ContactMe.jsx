import React from 'react'
import { StyleContactMe } from './styles/ContactMe'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt,FaPaperPlane } from 'react-icons/fa'

function ContactMe() {
  return (
    <StyleContactMe>
        <div className="contact section" id='contact'>
            <h2 className="section-title">聯繫我</h2>
            <span className="section-subtitle">Get in touch</span>

            <div className="contact-container container grid">
                <div>
                    <div className="contact-information">
                        <FaPhoneAlt className='contact-icon'/>

                        <div>
                            <h3 className='contact-title'>電話</h3>
                            <span className="contact-subtitle">0978523656</span>
                        </div>
                    </div>

                    <div className="contact-information">
                        <FaEnvelope className='contact-icon'/>

                        <div>
                            <h3 className='contact-title'>信箱</h3>
                            <span className="contact-subtitle">yuncheng3590@gmail.com</span>
                        </div>
                    </div>

                    <div className="contact-information">
                        <FaMapMarkerAlt className='contact-icon'/>

                        <div>
                            <h3 className='contact-title'>Location</h3>
                            <span className="contact-subtitle">0978523656</span>
                        </div>
                    </div>
                </div>

                <form action="" className="contact-form grid">
                    <div className="contact-inputs grid">
                        <div className="contact-content">
                            <label htmlFor="" className="contact-label">Name</label>
                            <input type="text" className="contact-input" />
                        </div>
                        <div className="contact-content">
                            <label htmlFor="" className="contact-label">Email</label>
                            <input type="email" className="contact-input" />
                        </div>
                    </div>
                    <div className="contact-content">
                        <label htmlFor="" className="contact-label">Message</label>
                        <textarea name="" id="" cols="0" rows="7" className="contact-input"></textarea>
                    </div>

                    <div>
                        <a href="/#" className="button button-flex">
                            Send Message<FaPaperPlane className='button-icon'/>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </StyleContactMe>
  )
}

export default ContactMe