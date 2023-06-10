import React from 'react'
import { logo } from "../../src/Assets"

function Header() {
  return (
    <div>
      <header className="header">
        <div className='logo-div'>
          <img class="logo" src={logo} alt="WF" />
          <h1 class="logo-name">WebFolio</h1>
        </div>
        <div className='header-div-pages'>
          <ul className='header-pages-text '>
            <li className='header-content'>
              <h1>Home</h1>
            </li>
            <li className='header-content'>
              <h1>About</h1>
            </li>
            <li className='header-content'>
              <h1>Service</h1>
            </li>
            <li className='header-content'>
              <h1>Contact</h1>
            </li>
            <li>
              <button className='header-hire'>
                <span className='header-hire-me'>Hire me</span>
              </button>
            </li>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default Header
