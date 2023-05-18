import React from 'react'
import './header.css'

import { Link } from 'react-router-dom'



function Header() {
  return (
      <div  className='header-section'>
      <h1>WELCOME TO MY BLOG WEBSITE</h1>
      <div className="headerLinks">
      <Link to='/' className='linkitem'>Home </Link>
      <Link to='/about' className='linkitem'>About </Link>
      <Link to='/contacts' className='linkitem'>Contact </Link>
      </div>
      
      

      
    </div>
  )
}

export default Header