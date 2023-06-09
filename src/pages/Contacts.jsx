import React from 'react'
import './contact.css'
import { FaPhoneAlt } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import { AiFillLinkedin } from 'react-icons/ai'
 import {FiExternalLink} from 'react-icons/fi'


function Contacts() {
  return (
      <div className='contact-Page'>
    
          <h4>
              Thank you for visiting my website. If you have any questions, suggestions, or just want
              to connect, feel free to reach out to me using the contact information below. I'm always
              eager to engage with fellow web developers, discuss tech-related topics, and explore the
              exciting possibilities of AI. Don't hesitate to get in touch, and let's embark on a meaningful
              conversation together. I look forward to hearing from you!
          </h4>
          <div className="contac-details">
              <ul className='myUl'>
                  <h2>Connect with me:</h2>
                  <li className='mylist'><FaPhoneAlt/> - +254768353360</li>
                  <li className='mylist'><GrMail/> -bkemboi590@gmail.com</li>
                  <li className='mylist'><a href="https://www.linkedin.com/in/kibichii-brian/" target='_blank'><AiFillLinkedin/>LinkedIn</a></li>
                  <li className='mylist'><a href="https://polite-hill-0a3e25203.2.azurestaticapps.net/"  target='_blank'><FiExternalLink/>visit My-Website</a></li>
              </ul>
          </div>
          
      </div>
  )
}

export default Contacts