import React, { useEffect, useRef, useState } from 'react'
import '../App.css'
import './HomeMiddle.css'

function HomeMiddle() {
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
    <div id='home-about' className='offwhite-background'>
      <div className='home-middle-container'>
          <h1>
              At ARENA, our mission is to spotlight and promote the exceptional talent of 
              local fashion designers from the borderland.
          </h1>
          <div ref={squareRef} 
               className={`home-middle-red-square ${hasAnimated ? 'visible' : 'hidden'}`}>
          </div>
      </div>
    </div>
  )
}

export default HomeMiddle
