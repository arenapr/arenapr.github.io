import React from 'react'
import '../App.css'
import './HomeNorth.css'
import bgVideo from '../assets/videos/hero-bw-models.mp4';

function HomeNorth() {
  return (
    <div className='home-north-container'>
      <video className="video" autoPlay loop muted playsInline>
        <source src={bgVideo} type="video/mp4" />
        {/* Fallback for browsers that don't support HTML video */}
        Your browser does not support the video tag.
      </video>
      <div className='arena-box'>
        ARENA
      </div>
    </div>
  )
}

export default HomeNorth
