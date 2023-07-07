import React, { useEffect, useState } from 'react'
import { PXlogoB } from "../../Assets"
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ComputerIcon from '@mui/icons-material/Computer';
import HandymanIcon from '@mui/icons-material/Handyman';
import ContactMailIcon from '@mui/icons-material/ContactMail';

import $ from 'jquery';
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();



  
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

  

  useEffect(() => {
    const handleClick = () => {
      $('.menu span').not(':last-child').toggleClass('hidden show');
    };

    $('.menu span:last-child').click(handleClick);

    return () => {
      $('.menu span:last-child').off('click', handleClick);
    };
  }, []);


  const isActive = (pathname) => {
    return location.pathname === pathname ? 'active' : '';
  };

  return (
    <div>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>

        <div className='logo-div'>
          <img class="logo" src={PXlogoB} alt="WF" />
          <h1 class={` logo-name ${isScrolled ? 'scrolled' : ''}`}>PortFolioX</h1>
        </div>

        <div class="menu lg:hidden ">
          
            <div className='res-icon1'><span class="fa hidden"><HomeIcon /> </span></div>
          
          
            <div className='res-icon2'><span class="fa  hidden"><ComputerIcon /></span></div>
          
          
            <div className='res-icon3'><span class="fa  hidden"><HandymanIcon /> </span></div>
          
          
          <div className='res-icon4'><span class="fa  hidden"><ContactMailIcon /> </span></div>
          

          <span class="fa fa-bars fa-1.5x fa-inverse f-fw"></span>
        </div>

        <div className='header-div-pages hidden lg:block'>
          <ul className='header-pages-text '>
            <li className={`header-content ${isScrolled ? 'scrolled ' : ''}${isActive('/')}`}>
              <Link to={"/"}>
                <h1>Home</h1>
              </Link>
            </li>

            <li className={`header-content ${isScrolled ? 'scrolled ' : ''}${isActive('/about')}`}>
              <Link to={"/about"}>
                <h1>About</h1>
              </Link>
            </li>

            <li className={`header-content ${isScrolled ? 'scrolled ' : ''}${isActive('/service')}`}>
              <Link to={"/service"}>
                <h1>Service</h1>
              </Link>
            </li>
            <li className={`header-content ${isScrolled ? 'scrolled ' : ''} ${isActive('/contact')}`} >
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