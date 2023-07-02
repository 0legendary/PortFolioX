import React, { useState, useEffect, useRef } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
import { avatar } from '../../Constants/ServiceItems';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, onValue, off } from 'firebase/database';
import { formatDistanceToNow } from 'date-fns';


const firebaseConfig = {
  apiKey: "AIzaSyCPQl58BGJtJ0K7UPSRSf0F14lW_8M4da8",
  authDomain: "personal-website-e3ef0.firebaseapp.com",
  projectId: "personal-website-e3ef0",
  storageBucket: "personal-website-e3ef0.appspot.com",
  messagingSenderId: "938148258775",
  appId: "1:938148258775:web:77f1787829ce6ff65d2192",
  measurementId: "G-VQ6EQ0YBPW"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function ContactManager() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const commentsRef = ref(database, 'comments');
    const commentsListener = onValue(commentsRef, (snapshot) => {
      const commentsData = snapshot.val();
      const commentsArray = commentsData ? Object.values(commentsData) : [];
      const reversedComments = commentsArray.reverse(); // Reverse the order of comments
      setComments(reversedComments);
      setLoading(false); // Set loading to false once comments are fetched
    });

    return () => {
      off(commentsRef, commentsListener);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const message = e.target.elements.message.value;

    const newComment = { name, email, message, timestamp: new Date().toISOString() };
    const reversedComments = [newComment, ...comments]; // Reverse the order of comments

    setComments(reversedComments);
    const commentsRef = ref(database, 'comments');
    push(commentsRef, newComment);

    e.target.reset();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.shiftKey === false) {
      e.preventDefault();
      document.getElementById('submit').click();
    }
  };

  useInterval(() => {
    const commentsRef = ref(database, 'comments');
    onValue(commentsRef, (snapshot) => {
      const commentsData = snapshot.val();
      const commentsArray = commentsData ? Object.values(commentsData) : [];
      const reversedComments = commentsArray.reverse(); // Reverse the order of comments
      setComments(reversedComments);
    });
  }, 10000);
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
          {/* Contact form */}
          <section id="contact">

            <div className="contact-wrapper">
              <form id="contact-form" className="form-horizontal" onSubmit={handleSubmit}>
                <h1 className='comment-heading-form'>Leave a Comment</h1>
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
                <textarea className="form-control" rows="10" placeholder="MESSAGE" name="message" onKeyDown={handleKeyDown} required></textarea>
                <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
                  <div className="alt-send-button">
                    <i className="fa fa-paper-plane"></i><span className="send-text">SEND</span>
                  </div>
                </button>
              </form>

              {/* Contact information and social media links */}
              <div className="direct-contact-container">
                <ul className="contact-list">
                  <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">Calicut, Kerala</span></i></li>
                  <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone">Phone: (+91)9961689333</span></i></li>
                  <li className="list-item"><i className="fa fa-envelope fa-2x"><a href='mailto:bitsandbytes.alen@gmail.com'><span className="contact-text gmail">Email: bitsandbytes.alen@gmail.com</span></a></i></li>
                </ul>

                <div className='border-line-contact'>
                  <ul className="social-media-list">
                    <li onClick={() => window.open("https://github.com/0legendary", "_blank")}>
                      <a href="https://github.com/0legendary" className="contact-icon">
                        <i className="fa fa-github" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li onClick={() => window.open("https://twitter.com/_Alen_m_", "_blank")}>
                      <a href="https://twitter.com/_Alen_m_" className="contact-icon">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li onClick={() => window.open("https://www.instagram.com/_alen_m__/", "_blank")}>
                      <a href="https://www.instagram.com/_alen_m__/" className="contact-icon">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li onClick={() => window.open("https://www.linkedin.com/in/alen-m-4a7a39241/", "_blank")}>
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

      {/* Comment section */}
      {loading ? (
        <div className='comment-section'>
          <div class="gooey">
            <span class="dot"></span>
            <div class="dots">
              <span className='dots-span'></span>
              <span className='dots-span'></span>
              <span className='dots-span'></span>
            </div>
          </div>
        </div>

      ) : (

        comments.map((comment, index) => (

          <div className='comment-section' key={index} >
            <div className='comment-container'>
              <div key={index} className="comment">
                <div className='name-email-container'>
                  <div className='avatar-name-container' >
                    {avatar.map((item, itemIndex) => {
                      if (itemIndex === index % avatar.length) {
                        return (
                          <div className='avatar' key={item._id}>
                            <img src={item.avt} alt='😊' />
                          </div>
                        );
                      }
                      return null;
                    })}
                    <h1 className="name">{comment.name}</h1>
                  </div>
                  <div className='contact-email-comment'>
                    <a href={`mailto:${comment.email}`}>{comment.email}</a>
                  </div>
                </div>

                <div className='align'>
                  <div>
                    <p className="message">{comment.message}</p>
                  </div>
                </div>

                <div className='comment-date'>
                  <p>{formatDistanceToNow(new Date(comment.timestamp), { addSuffix: true })}</p>
                </div>
              </div>

            </div>
          </div>

        ))
      )}
    </div>
  );
}

export default ContactManager;
