import React from 'react'
import './header.css'

import { Link } from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'


function Header() {
  return (
      <div  className='header-section'>
      <h1>WELCOME TO MY BLOG WEBSITE</h1>
      <div className="headerLinks">
      <Link to='/' className='linkitem'>Home {AiFillHome} </Link>
      <Link to='/webdev' className='linkitem'>WebDev </Link>
      <Link to='/techjourney' className='linkitem'>TechJourney </Link>
      <Link to='/futureai' className='linkitem'>FutureAI </Link>
      </div>
      
      

      
    </div>
  )
}

export default Header