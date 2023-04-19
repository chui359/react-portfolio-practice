import React from 'react'
import { StyleContact } from './styles/Contact.styled'
import { FaLinkedin, FaTelegramPlane } from 'react-icons/fa'
import { Container } from './styles/Container.styled'

function Contact() {
  return (
    
    <StyleContact>
      <Container>

        <div className="contact">
          <h1 className='sub-title'>Contact Me</h1>
          <p> <i><FaTelegramPlane/></i>chui359123@gmail.com</p>
          <form>
            <input type="text" name="name" placeholder='Your Name' required/>
            <input type="email" name="email" placeholder='Your Email' required/>
            <textarea name='message' row='6' placeholder='Your Message'></textarea>
            <button type='submit' className='btn btn2'>Submit</button>
          </form>
        </div>

      </Container>

      <div className='copyright'>
          <p>&copy; 2023 YUN CHENG. All rights reserved</p>
      </div>
    </StyleContact>
    

  )
}

export default Contact