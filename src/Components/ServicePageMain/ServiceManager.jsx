import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
import { ServiceItems } from '../../Constants/ServiceItems';

function ServiceManager() {
    return (
        <div>
            <div>
                <div className='about-page'>
                    <h1 className='about-page-heading btn-shine'>SERVICES</h1>
                    <h1 className='about-page-subheading'>
                        <span><Link to="/">Home</Link></span>
                        <ArrowForwardIosIcon className='ab-p-span' />
                        Service
                    </h1>
                </div>
                <div>
                    <section className='service'>
                        <div className='service-main-div'>
                            <div className='service-main-div1'>
                                <h3 className='service-heading'>What I do for You</h3>
                            </div>
                            <div className='service-items-container'>
                                {ServiceItems.map((item) => {
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
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default ServiceManager
