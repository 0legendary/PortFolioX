import React from 'react'
import ArchitectureIcon from '@mui/icons-material/Architecture';
import {MoreIcon} from "../../Assets"
function Services() {
  return (
    <div>
      <section className='service'>
                <div className='service-main-div'>
                    <div className='service-main-div1'>
                        <h3 className='service-heading'>What I do for You</h3>
                    </div>
                    <div className='service-items'>
                        <div>
                            <div className='service-box'>
                                <h3 className='service-box-heading'><ArchitectureIcon /> Web Designing</h3>
                                <p>Provides a seamless user experience and user-friendly. Highly importance for client's
                                    brand and goals</p>
                            </div>
                            
                        </div>
                        <div>
                            <div className='service-box'>
                                <h3 className='service-box-heading'><ArchitectureIcon />React</h3>
                                <p>Provides a seamless user experience and user-friendly. Highly importance for client's
                                    brand and goals</p>
                            </div>
                        </div>
                        <div>
                            <div className='service-box'>
                                <h3 className='service-box-heading'><ArchitectureIcon />Git Service</h3>
                                <p>Provides a seamless user experience and user-friendly. Highly importance for client's
                                    brand and goals.</p>
                            </div>
                        </div>

                    </div>
                    <div>
                        <h3 className="service-more">More Service
                            <span className='next-page'>
                                <img src={MoreIcon} alt=">"/>
                            </span>
                        </h3>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Services
