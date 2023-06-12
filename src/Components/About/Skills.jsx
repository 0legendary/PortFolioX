import React from 'react'
import { BrototypeLogo, CompanyLogo, ExpoLogo, } from '../../Assets'

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
                                <h2 className='progress-content'>Web Designing</h2>
                                <div className="progress">
                                    <div className='progress-value' style={{ width: "64%", left: "62%" }} data-percent="64%"></div>
                                </div>
                            </div>
                            <div>
                                <h2 className='progress-content'>Responsive</h2>
                                <div className="progress">
                                    <div className='progress-value' style={{ width: "40%", left: "38%" }} data-percent="40%"></div>
                                </div>
                            </div>
                            <div>
                                <h2 className='progress-content'>Web Designing</h2>
                                <div className="progress">
                                    <div className='progress-value' style={{ width: "30%", left: "28%" }} data-percent="30%"></div>
                                </div>
                            </div>
                            <div>
                                <h2 className='progress-content'>Responsive</h2>
                                <div className="progress">
                                    <div className='progress-value' style={{ width: "80%", left: "78%" }} data-percent="80%"></div>
                                </div>
                            </div>
                            <div>
                                <h2 className='progress-content'>Python</h2>
                                <div className="progress">
                                    <div className='progress-value' style={{ width: "60%", left: "58%" }} data-percent="60%"></div>
                                </div>
                            </div>
                        </div>

                        <div className="progress-bar">
                            <div>
                                <h2 className='progress-content'>Web Designing</h2>
                                <div className="progress">
                                    <div className='progress-value' style={{ width: "45%", left: "43%" }} data-percent="45%"></div>
                                </div>
                            </div>
                            <div>
                                <h2 className='progress-content'>Web Designing</h2>
                                <div className="progress">
                                    <div className='progress-value' style={{ width: "89%", left: "87%" }} data-percent="89%"></div>
                                </div>
                            </div>
                            <div>
                                <h2 className='progress-content'>Web Designing</h2>
                                <div className="progress">
                                    <div className='progress-value' style={{ width: "72%", left: "70%" }} data-percent="72%"></div>
                                </div>
                            </div>
                            <div>
                                <h2 className='progress-content'>Responsive</h2>
                                <div className="progress">
                                    <div className='progress-value' style={{ width: "83%", left: "81%" }} data-percent="83%"></div>
                                </div>
                            </div>
                            <div>
                                <h2 className='progress-content'>Responsive</h2>
                                <div className="progress">
                                    <div className='progress-value' style={{ width: "45%", left: "43%" }} data-percent="45%"></div>
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
                            <img className='extra-act-img' src={CompanyLogo} alt="img" />
                            <p className='extra-act-des'>Intensive coding bootcamp program by Brototype <br />(March 2022 - present)</p>
                        </div>
                        <div className='extra-activity-prop'>
                            <img className='extra-act-img' src={ExpoLogo} alt="img" />
                            <p className='extra-act-des'>Intensive coding bootcamp program by Brototype <br />(March 2022 - present)</p>
                        </div>
                        <div className='extra-activity-prop'>
                            <img className='extra-act-img' src={BrototypeLogo} alt="img" />
                            <p className='extra-act-des'>Intensive coding bootcamp program by Brototype <br />(March 2022 - present)</p>
                        </div>
                        <div className='extra-activity-prop'>
                            <img className='extra-act-img' src={BrototypeLogo} alt="img" />
                            <p className='extra-act-des'>Intensive coding bootcamp program by Brototype <br />(March 2022 - present)</p>
                        </div>
                        <div className='extra-activity-prop'>
                            <img className='extra-act-img' src={BrototypeLogo} alt="img" />
                            <p className='extra-act-des'>Intensive coding bootcamp program by Brototype <br />(March 2022 - present)</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Skills

