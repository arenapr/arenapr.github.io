import React from 'react'
import '../App.css'
import './AboutTeam.css'

function AboutTeam() {
  return (
    <div className='about-team-container'>
      <h1>MEET THE TEAM</h1>
        <div className='about-team-wrapper'>
          <div className='team-image-container'>
            <div className='team-redbox'></div>
            <img src='/images/fer photo.jpg' alt='Freddy Image' />
            <p>Fernanda Ortiz is an entrepreneur, philanthropist, and artist. 
            As the founder of ARENA, she combines her passions for high fashion and 
            social impact. Inspired by the vibrant and creative community of El Paso, 
            Fernanda views fashion as a powerful means of self-expression. Through ARENA, 
            she is dedicated to building a supportive and empowering community for local 
            fashion designers across the borderland.</p>
          </div>
          <div className='team-image-container'>
            <div className='team-redbox'></div>
            <img src='/images/Freddy.jpg' alt='Freddy Image' />
            <p>Alfredo Rodriguez is a software engineer and a proud computer science 
              graduate of UTEP. With a deep passion for technology, he channels his 
              creativity through photography and videography, capturing moments that 
              inspire. His personal style is influenced by the timeless elegance of 
              Alex Turner, always complemented by his signature accessory– a sleek pair 
              of Ray-Ban sunglasses.</p>
          </div>
        </div>
    </div>
  )
}

export default AboutTeam