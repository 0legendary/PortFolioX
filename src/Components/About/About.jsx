import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Biography } from "../../Assets"


function About() {
    return (
        <div className='about-page-container-home'>
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <section className='about'>
                <div className='about-div'>
                    <div className='about-image'>
                        <img src={Biography} alt="" />
                    </div>
                    <div className='about-bio'>
                        <h1 className='about-bio-text'>My Biography</h1>
                        <h3 class="about-quote-text ">Empowered by code and fueled by Creativity</h3>
                        <p class="about-text1">"Let's turn your website dreams into reality! With my expertise in web
                            design and commitment to delivering exactly what you need, we can create a stunning online
                            presence that will leave a lasting impression."
                        </p>
                        <div class="my-info">
                            <div class="single-info"><span>Name: Alen.m</span>
                                <p></p>
                            </div>
                            <div class="single-info"><span>From: Kerala, Calicut</span>
                                <p></p>
                            </div>
                            <div class="single-info">
                                <span>Email: 
                                 <a href="bitsandbytes.alen@gmail.com">  bitsandbytes.alen@gmail.com</a>
                                </span>
                                <p></p>
                            </div>
                            <div class="single-info"><span>Phone: <a href="tel:+91 9961689333">  9961689333</a></span>
                                <p></p>
                            </div>
                            {/* <div class="single-info">
                                <p>Education: Plus One</p>
                            </div> */}
                        </div>
                        <div>
                            <ul className='about-social-media'>
                                <li>
                                    <h5>Connect me on: </h5>
                                </li>
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
                </div>
            </section>


        </div>
    )
}

export default About
