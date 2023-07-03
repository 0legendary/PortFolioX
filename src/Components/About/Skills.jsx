import React from 'react'
import { AWS, BrototypeLogo, CompanyLogo, ExpoLogo, KeralaJs, TinkerHub} from '../../Assets'

function Skills() {
    return (
        <div>
            <section className='skill-section'>
                <div className='skill-main-div'>
                    <div className='skill-heading'>
                        <h2>My Skills</h2>
                    </div>
                    <div className='progress-container'>
                        <div className="progress-bar">
                            <div>
                                <h2 className='progress-content'>JavaScript</h2>
                                <div className="progress">
                                    <div className='progress-value' style={{ width: "85%", left: "83%" }} data-percent="85%"></div>
                                </div>
                            </div>
                            <div>
                                <h2 className='progress-content'>UI/UX Design</h2>
                                <div className="progress">
                                    <div className='progress-value' style={{ width: "97%", left: "95%" }} data-percent="97%"></div>
                                </div>
                            </div>
                            <div>
                                <h2 className='progress-content'>MongoDB</h2>
                                <div className="progress">
                                    <div className='progress-value' style={{ width: "72%", left: "70%" }} data-percent="72%"></div>
                                </div>
                            </div>
                            
                            <div>
                                <h2 className='progress-content'>Communication</h2>
                                <div className="progress">
                                    <div className='progress-value' style={{ width: "93%", left: "91%" }} data-percent="93%"></div>
                                </div>
                            </div>
                            <div>
                                <h2 className='progress-content'>Python</h2>
                                <div className="progress">
                                    <div className='progress-value' style={{ width: "48%", left: "46%" }} data-percent="48%"></div>
                                </div>
                            </div>
                            <div>
                                <h2 className='progress-content'>Node.js</h2>
                                <div className="progress">
                                    <div className='progress-value' style={{ width: "67%", left: "65%" }} data-percent="67%"></div>
                                </div>
                            </div>
                        </div>

                        <div className="progress-bar">
                            <div>
                                <h2 className='progress-content'>React.js</h2>
                                <div className="progress">
                                    <div className='progress-value' style={{ width: "95%", left: "93%" }} data-percent="95%"></div>
                                </div>
                            </div>
                            <div>
                                <h2 className='progress-content'>Problem Solving</h2>
                                <div className="progress">
                                    <div className='progress-value' style={{ width: "90%", left: "88%" }} data-percent="90%"></div>
                                </div>
                            </div>
                            
                            <div>
                                <h2 className='progress-content'>Testing & Debugging</h2>
                                <div className="progress">
                                    <div className='progress-value' style={{ width: "96%", left: "94%" }} data-percent="96%"></div>
                                </div>
                            </div>
                            <div>
                                <h2 className='progress-content'>Deployment and DevOps</h2>
                                <div className="progress">
                                    <div className='progress-value' style={{ width: "69%", left: "67%" }} data-percent="69%"></div>
                                </div>
                            </div>
                            
                            <div>
                                <h2 className='progress-content'>GIT</h2>
                                <div className="progress">
                                    <div className='progress-value' style={{ width: "89%", left: "87%" }} data-percent="89%"></div>
                                </div>
                            </div>
                            <div>
                                <h2 className='progress-content'>Express.js</h2>
                                <div className="progress">
                                    <div className='progress-value' style={{ width: "52%", left: "50%" }} data-percent="52%"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className='extra-activities'>

                <div className='extra-activity-container'>
                    <div className='activities'>
                        <h1>Extra Activities</h1>
                    </div>
                    <div className=' extra-act-div'>
                        <div className='extra-activity-prop'>
                            <img className='extra-act-img' src={BrototypeLogo} alt="img" />
                            <p className='extra-act-des'>Intensive coding bootcamp program by Brototype <br />(March 2022 - present)</p>
                        </div>
                        <div className='extra-activity-prop'>
                            <img className='extra-act-img' src={AWS} alt="img" />
                            <p className='extra-act-des'>Engaged in AWS workshop to explore New Technologies<br />(Apr 18 - 2022)</p>
                        </div>
                        
                        <div className='extra-activity-prop'>
                            <img className='extra-act-img' src={KeralaJs} alt="img" />
                            <p className='extra-act-des'>Participate actively in Kerala JS Tech event<br />(Jun 25 - 2023)</p>
                        </div>
                        <div className='extra-activity-prop'>
                            <img className='extra-act-img' src={CompanyLogo} alt="img" />
                            <p className='extra-act-des'>Tech conference by Gedexo -Software company<br />(Feb 5 - 2023)</p>
                        </div>
                        <div className='extra-activity-prop'>
                            <img className='extra-act-img' src={TinkerHub} alt="img" />
                            <p className='extra-act-des'>Member of Tech Community in Tinker Hub <br />(Jan 2023 - present)</p>
                        </div>
                        <div className='extra-activity-prop'>
                            <img className='extra-act-img' src={ExpoLogo} alt="img" />
                            <p className='extra-act-des'>Active Participant in Dhisha 23's Tech Seminar <br />(Jan 3 - 2023)</p>
                        </div>
                        
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Skills

