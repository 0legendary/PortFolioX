import React from 'react';
import { PXlogoB } from "../../Assets"
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

import Scroll from '../../Constants/Scroll';

function Footer() {

  return (
    <div>
      <section className='footer-section'>
        <div className='footer-container'>
          <div className='footer-name-div logo-div'>
            <img class="logo" src={PXlogoB} alt="WF" />
            <h1 class="footer-logo">PortFolioX</h1>
          </div>
          <div>
            <ul className='footer-personal-details'>
              <li>
                <a href="tel:+91 9961689333"><CallIcon />+91 9961689333</a>
              </li>
              <li>
                <a href="mailto:alenmullassery123@gmail.com"><EmailIcon /> alenmullassery123@gmail.com</a>
              </li>
              <li><LocationOnIcon /> Calicut</li>
            </ul>
          </div>


          <div className='footer-rights'>
            <p>© 2023 PortfolioX. All Rights Reserved |</p>
            <div>
              <ul className='about-social-media-footer'>
                <li className='social-media'>
                  <a href="https://www.linkedin.com/in/alen-m-4a7a39241/"><LinkedInIcon /></a>
                </li>
                <li className='social-media'>
                  <a href="https://twitter.com/_Alen_m_"><TwitterIcon /></a>
                </li>
                <li className='social-media'>
                  <a href="https://www.instagram.com/_alen_m__/"><InstagramIcon /></a>
                </li>
                <li className='social-media'>
                  <a href="https://github.com/0legendary"><GitHubIcon /></a>
                </li>
              </ul>

            </div>
          </div>
          <Scroll />
        </div>
      </section>

    </div>
  )
}

export default Footer
