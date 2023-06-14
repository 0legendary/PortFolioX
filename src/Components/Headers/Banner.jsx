import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

function Banner() {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Web Designer', 'Web Developer', "React Developer"],
      typeSpeed: 100,
      backSpeed: 50,
      showCursor: false,
      startDelay: 0,
      loop: true,
      onComplete: function (self) {
        const cursor = self.el.parentElement.querySelector('.cursor');
        if (cursor) {
          cursor.remove();
        }
      },
    };

    typedRef.current = new Typed('.typed-text', options);

    return () => {
      // Cleanup the typed.js instance when the component unmounts
      typedRef.current.destroy();
    };
  }, []);

  return (
    <div>
      <section className='Banner'>
        <div className='banner-div'>
          <div className='banner-name-skills'>
            <h1 className='banner-name'>Hi, I'm Alen</h1>
            <h3 className='skills'>
              <span className='banner-skills typed-text'></span>
            </h3>
            <p class="banner-des">I have a passion for graphic design and a proven track record of innovative and
              eye-catching designs. Let me give your business a fresh creative start with my unique and
              dynamic approach!
            </p>
            <div>
              <button className='banner-btn'>Hire Me</button>
              <button className='banner-btn'>My Portfolio</button>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;