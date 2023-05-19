import React from 'react'
import './header.css'

import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import {FaUserAlt} from 'react-icons/fa'
import {MdContacts} from 'react-icons/md'



function Header() {
  return (
      <div  className='header-section'>
      <h1>WELCOME TO MY BLOG WEBSITE</h1>
      <div className="headerLinks">
        <Link to='/' className='linkitem'> < FaHome /> Home </Link>
      <Link to='/about' className='linkitem'><FaUserAlt/> About </Link>
      <Link to='/contacts' className='linkitem'> <MdContacts/> Contact </Link>
      </div>
      
      

      
    </div>
  )
}

export default Header