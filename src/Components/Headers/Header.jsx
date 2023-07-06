import React, { useEffect, useState } from 'react'
import { PXlogoW } from "../../Assets"
import { Link } from 'react-router-dom';

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
              <Link to={"/"}>
                <h1>Home</h1>
              </Link>
            </li>

            <li className={`header-content ${isScrolled ? 'scrolled' : ''}`}>
              <Link to={"/about"}>
                <h1>About</h1>
              </Link>
            </li>

            <li className={`header-content ${isScrolled ? 'scrolled' : ''}`}>
              <Link to={"/service"}>
                <h1>Service</h1>
              </Link>
            </li>
            <li className={`header-content ${isScrolled ? 'scrolled' : ''}`}>
              <Link to={"/contact"}>
                <h1>Contact</h1>
              </Link>
            </li>

            <li>

              <button className='header-hire'>
                <a className='header-hire-me'
                  href="https://drive.google.com/file/d/1WBJaSH8hx1nGVcysdWC-2W1QzIgfM88Z/view?usp=drive_link"
                  target="_blank" rel="noopener noreferrer">
                  Get Resume
                </a>
              </button>


            </li>
          </ul>
        </div>

      </header>
    </div>
  )
}

export default Header