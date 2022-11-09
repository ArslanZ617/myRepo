
import React from 'react'

let d = new Date();
let year = d.getFullYear();

export default function Footer() {
  return (
    <div className='footer'>
      <p>{year} © Arslan Asif</p>
      <ul>
        <li><i class="fa-brands fa-facebook" /></li>
        <li><i class="fa-brands fa-instagram" /></li>
        <li><i class="fa-brands fa-linkedin" /></li>
        <li><i class="fa-brands fa-youtube" /></li>
        </ul>
    </div>
  )
}


