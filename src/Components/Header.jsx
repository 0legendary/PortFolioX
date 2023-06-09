import React from 'react'
import { logo } from "../../Assets"

function Header() {
  return (
    <div>
      <header className="header">
        <div>
        <img src={logo} alt="" />
        </div>
      </header>
    </div>
  )
}

export default Header
