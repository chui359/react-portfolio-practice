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
                            <h3 className='contact-title'>地址</h3>
                            <span className="contact-subtitle">高雄市左營區</span>
                        </div>
                    </div>
                </div>

                <form action="https://formsubmit.co/yuncheng3590@gmail.com" method="POST"  className="contact-form grid">
                    <div className="contact-inputs grid">
                        <div className="contact-content">
                            <label htmlFor="" className="contact-label">姓名</label>
                            <input type="text" name='name' className="contact-input" required />
                        </div>
                        <div className="contact-content">
                            <label htmlFor="" className="contact-label">信箱</label>
                            <input type="email" name='email' className="contact-input" required />
                        </div>
                    </div>
                    <div className="contact-content">
                        <label htmlFor="" className="contact-label">訊息</label>
                        <textarea name="message" id="" cols="0" rows="7" className="contact-input"></textarea>
                    </div>

                    <div>
                        <button type='submit' className="button button-flex">
                            寄出信件<FaPaperPlane className='button-icon'/>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </StyleContactMe>
  )
}

export default ContactMe