import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
import { ServiceItems } from '../../Constants/ServiceItems';
import { developing } from '../../Assets';
import { discussing } from '../../Assets';
import { finished } from '../../Assets';



function ServiceManager() {
    const backgroundImage1 = {
    backgroundImage: `url(${developing})`,
  };
  
  const backgroundImage2 = {
    backgroundImage: `url(${discussing})`,
  };
  
  const backgroundImage3 = {
    backgroundImage: `url(${finished})`,
  }
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
                <div className='service-providance'>
                    <div className='service-providance-container'>
                        <div>
                            <h1>Ingenious approaches to Enhance Your Creative Endeavors</h1>
                        </div>
                        <div className='service-card-container'>
                            <div class="service-card">
                                <div class="service-img-container">
                                    <div class="service-img"  style={backgroundImage1}>
                                    </div>
                                    <div class="service-b-description ">
                                        <span class="service-title">
                                        Discuss the Project
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="service-card">
                                <div class="service-img-container">
                                    <div class="service-img" style={backgroundImage2}>
                                    </div>
                                    <div class="service-b-description ">
                                        <span class="service-title">
                                        Develop & Elaborate
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="service-card">
                                <div class="service-img-container">
                                    <div class="service-img" style={backgroundImage3}>
                                    </div>
                                    <div class="service-b-description ">
                                        <span class="service-title">
                                        Final Approvement
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceManager
