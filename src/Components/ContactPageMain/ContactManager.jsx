import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';

function ContactManager() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const message = e.target.elements.message.value;

    // Perform any desired actions with the form data
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Reset the form fields
    e.target.reset();
  };

  return (
    <div>
      <div>
        <div className='about-page'>
          <h1 className='about-page-heading btn-shine'>CONTACT</h1>
          <h1 className='about-page-subheading'>
            <span><Link to="/">Home</Link></span>
            <ArrowForwardIosIcon className='ab-p-span' />
            Contact
          </h1>
        </div>
        <div className='contact-body'>
          <section id="contact">

            <div className="contact-wrapper">
              <form id="contact-form" className="form-horizontal" onSubmit={handleSubmit}>
                <div className="form-group">
                  <div className="col-sm-12">
                    <input type="text" className="form-control" id="name" placeholder="NAME" name="name" required />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-12">
                    <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email" required />
                  </div>
                </div>
                <textarea className="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>
                <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
                  <div className="alt-send-button">
                    <i className="fa fa-paper-plane"></i><span className="send-text">SEND</span>
                  </div>
                </button>
              </form>

              <div className="direct-contact-container">
                <ul className="contact-list">
                  <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">City, State</span></i></li>
                  <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone">Phone: (212) 555-2368</span></i></li>
                  <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail">Email: hitmeup@gmail.com</span></i></li>
                </ul>

                <div className='border-line-contact'>
                  <ul className="social-media-list">
                    <li>
                      <a href="https://github.com/0legendary" className="contact-icon">
                        <i className="fa fa-github" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/_Alen_m_"  className="contact-icon">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/_alen_m__/"  className="contact-icon">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/alen-m-4a7a39241/" className="contact-icon">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>


                <div className="copyright border-line-contact">
                  &copy; ALL OF THE RIGHTS RESERVED
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ContactManager;
