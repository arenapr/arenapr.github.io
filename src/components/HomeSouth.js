import React, { useEffect, useRef, useState } from 'react'
import '../App.css'
import './HomeSouth.css'

function HomeSouth() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const squareRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (squareRef.current) {
      observer.observe(squareRef.current);
    }

    return () => {
      if (squareRef.current) {
        observer.unobserve(squareRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div id='home-contact-us' className='offwhite-background'>
      <div className='home-south-container'>
          <h1>
              We are in constant search for emerging local talent in the borderland.<br/><br/>
              Are you a local fashion designer that wants to showcase your work?<br/><br/>
              Send us an email and let us know!<br/><span style={{color: '#ca3631'}}>arena.pr@outlook.com</span><br/><br/>
              Please include your name, the name of your brand, and your social media handles.
          </h1>
          <div  ref={squareRef} 
               className={`home-south-red-square ${hasAnimated ? 'visible' : 'hidden'}`}>
          </div>
      </div>
    </div>
  )
}

export default HomeSouth