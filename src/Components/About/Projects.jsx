import React from 'react'

import { projectDescription } from '../../Constants';

function Projects() {
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
                                        <h2>70<span>%</span></h2>
                                    </div>
                                </div>
                                <h2 className="text">Projects</h2>
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
                                        <h2>82<span>%</span></h2>
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
                                        <h2>72<span>%</span></h2>
                                    </div>
                                </div>
                                <h2 className="text">Effort</h2>
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
                                        <h2>60<span>%</span></h2>
                                    </div>
                                </div>
                                <h2 className="text">Skill Set</h2>
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

                                            <img src={item.img} alt={item.alt} />
                                        </div>
                                        <div class="card-back">
                                            <ul>
                                                <li>{item.des1}</li>
                                                <li>{item.des2}</li>
                                                <li>{item.des1}</li>
                                                <li>{item.des2}</li>
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
