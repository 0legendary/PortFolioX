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
  const [isMenuShown, setIsMenuShown] = useState(false);




  useEffect(() => {
    const handleScroll = () => {
      if (isMenuShown) {
        setIsMenuShown(false);
      } else {
        if (window.pageYOffset > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    const handleClickOutsideMenu = (event) => {
      const menuIcons = document.querySelector('.menu span:last-child');
      const menu = document.querySelector('.menu');

      
  if (menu && !menu.contains(event.target) && !menuIcons.contains(event.target)) {
    setIsMenuShown(false);
  }
};


    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousedown', handleClickOutsideMenu);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousedown', handleClickOutsideMenu);
    };
  }, [isMenuShown]);




  useEffect(() => {
    const handleClick = () => {
      setIsMenuShown((prevState) => !prevState);
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

        <div className="menu lg:hidden">
          <span className={`fa ${isMenuShown ? 'show' : 'hidden'} ${isActive('/')} `}>
            <Link to="/">
              <HomeIcon />
            </Link>
          </span>

          <span className={`fa ${isMenuShown ? 'show' : 'hidden'} ${isActive('/about')} `}>
            <Link to="/about">
              <ComputerIcon />
            </Link>
          </span>

          <span className={`fa ${isMenuShown ? 'show' : 'hidden'} ${isActive('/service')} `}>
            <Link to="/service">
              <HandymanIcon />
            </Link>
          </span>

          <span className={`fa ${isMenuShown ? 'show' : 'hidden'} ${isActive('/contact')} `}>
            <Link to="/contact">
              <ContactMailIcon />
            </Link>
          </span>

          <span className="fa fa-bars fa-1.5x fa-inverse f-fw"></span>
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
                  href="https://drive.google.com/file/d/1rfB8WNLehh0UdUKPjo4RGTB5LW5tqlhP/view?usp=sharing"
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