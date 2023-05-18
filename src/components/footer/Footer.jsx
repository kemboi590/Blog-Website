import React from 'react'
import './footer.css'

let today = new Date();
let date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
console.log(today);

function Footer() {
  return (
      <div>
          <ul>
              <li>Author - <span>Brian Kemboi</span></li>
              <li>Email - <span>bkemboi590@gmail.com</span> </li>
        <li>Date - <span>{date }</span></li>
          </ul>
    </div>
  )
}

export default Footer