import React from 'react';
import { MoreIcon } from "../../Assets"
import { ServicesHome } from '../../Constants/ServiceItems';
import { Link } from 'react-router-dom';
function Services() {
    
    return (
        <div>
            <section className='service'>
                <div className='service-main-div'>
                    <div className='service-main-div1'>
                        <h3 className='service-heading'>What I do for You</h3>
                    </div>
                    
                        <div className='service-items-container'>
                        {ServicesHome.map((item) => {
                            return (

                                <div className='service-items' key={item._id}>
                                    <div>
                                        <div className='service-box'>
                                            <h3 className='service-box-heading'><span className='service-box-icon'>{item.img}</span>{item.Heading}</h3>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    
                    
                    <div>
                        <Link to={"/service"}>
                            <h3 className="service-more">More Service
                                <span className='next-page'>
                                    <img src={MoreIcon} alt=">" />
                                </span>
                            </h3>
                        </Link>

                    </div>
                </div>
                
            </section>
        </div>
    )
}

export default Services
