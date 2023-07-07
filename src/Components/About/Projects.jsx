import React from 'react'

import { projectDescription } from '../../Constants';

function Projects() {
    
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
      card.addEventListener('mouseleave', () => {
        card.scrollTop = 0;
      });
    });
    return (
        <div>
            <section className='working-details'>
                <div className='working-container'>

                    <div className="container">
                        <div className="card">
                            <div className="box">
                                <div className="percent">
                                    <svg>
                                        <circle cx="70" cy="70" r="70"></circle>
                                        <circle cx="70" cy="70" r="70"></circle>
                                    </svg>
                                    <div className="num">
                                        <h2>75<span>%</span></h2>
                                    </div>
                                </div>
                                <h2 className="text">Experience</h2>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="card">
                            <div className="box">
                                <div className="percent">
                                    <svg>
                                        <circle cx="70" cy="70" r="70"></circle>
                                        <circle cx="70" cy="70" r="70"></circle>
                                    </svg>
                                    <div className="num">
                                        <h2>87<span>%</span></h2>
                                    </div>
                                </div>
                                <h2 className="text">Innovations</h2>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="card">
                            <div className="box">
                                <div className="percent">
                                    <svg>
                                        <circle cx="70" cy="70" r="70"></circle>
                                        <circle cx="70" cy="70" r="70"></circle>
                                    </svg>
                                    <div className="num">
                                        <h2>92<span>%</span></h2>
                                    </div>
                                </div>
                                <h2 className="text">Code Quality</h2>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="card">
                            <div className="box">
                                <div className="percent">
                                    <svg>
                                        <circle cx="70" cy="70" r="70"></circle>
                                        <circle cx="70" cy="70" r="70"></circle>
                                    </svg>
                                    <div className="num">
                                        <h2>80<span>%</span></h2>
                                    </div>
                                </div>
                                <h2 className="text">Performance</h2>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


            <section className='projects'>
                <div className='project-container'>
                    <div className='project-heading'>
                        <h1>Projects</h1>
                    </div>
                    <div className='card-container'>
                        {
                            projectDescription.map((item) => {
                                return (
                                    <div class="card" key={item._id}>
                                        <div class="card-front">
                                            <h1 className='project-img-title'>{item.title}</h1>
                                            <img src={item.img} alt={item.alt} />
                                        </div>
                                        <div className="card-back">
                                        <h1 className='project-img-title' style={{color: "black"}}>{item.title}</h1>
                                            <ul>
                                                <li className='project-description'>&#8226; {item.des1}</li>
                                                <li className='project-description'>&#8226; {item.des2}</li>
                                                <li className='project-description'>&#8226; {item.des3}</li>
                                                <li className='project-description'>&#8226; {item.des4}</li>
                                            </ul>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>


                </div>

            </section>
        </div>
    )
}

export default Projects
