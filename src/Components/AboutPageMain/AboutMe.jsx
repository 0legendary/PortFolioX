import React from 'react'
import About from '../About/About'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
import Skills from '../About/Skills';



function AboutMe() {
    return (
        <div>
            <div className='about-page-container'>
                <div className='about-page'>
                    <h1 className='about-page-heading btn-shine'>ABOUT ME</h1>
                    <h1 className='about-page-subheading'>
                        <span><Link to="/">Home</Link></span>
                        <ArrowForwardIosIcon className='ab-p-span' />
                        About
                    </h1>
                </div>
                <div>
                    <About />
                </div>
                <div>
                    <Skills />
                </div>
                <div className='about-page-description'>
                    <div className='about-page-description-container'>
                        <div className='about-page-element'>
                            <h3 className=''>GET IN TOUCH</h3>
                            <h1>From Concept To Reality! Let's Discuss<br/> It To Make Your Dream Come True...</h1>
                            <p className='about-page-ptag'>With a passion for creativity and a dedication to quality, I am committed to delivering
                                 exceptional results that<br/> exceed your expectations and help your project stand out in 
                                 today's competitive landscape.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutMe
