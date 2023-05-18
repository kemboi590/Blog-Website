import React from 'react'
import './footer.css'

let today = new Date();
let date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
console.log(today);

function Footer() {
  return (
      <div>
          <ul className='footerUl'>
              <li className='footerList'>Author - <span>Brian Kemboi</span></li>
              <li className='footerList'>Email - <span>bkemboi590@gmail.com</span> </li>
             <li className='footerList'>Date - <span>{date }</span></li>
          </ul>
    </div>
  )
}

export default Footer