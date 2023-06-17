import React, { useEffect, useState } from 'react'
import { PXlogoW } from "../../Assets"

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>

        <div className='logo-div'>
          <img class="logo" src={PXlogoW} alt="WF" />
          <h1 class={`logo-name ${isScrolled ? 'scrolled' : ''}`}>PortFolioX</h1>
        </div>
        <div className='header-div-pages'>
          <ul className='header-pages-text '>
            <li className={`header-content ${isScrolled ? 'scrolled' : ''}`}>
              <h1>Home</h1>
            </li>
            <li className={`header-content ${isScrolled ? 'scrolled' : ''}`}>
              <h1>About</h1>
            </li>
            <li className={`header-content ${isScrolled ? 'scrolled' : ''}`}>
              <h1>Service</h1>
            </li>
            <li className={`header-content ${isScrolled ? 'scrolled' : ''}`}>
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
