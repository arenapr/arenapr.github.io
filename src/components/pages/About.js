import React from 'react'
import '../../App.css'
import AboutNorth from '../AboutNorth'
import AboutMiddle from '../AboutMiddle'
import AboutSouth from '../AboutSouth'
import AboutTeam from '../AboutTeam'
import Footer from '../Footer';

function About() {
    window.scrollTo(0, 0);
    return (
        <>
          <AboutNorth />
          <AboutMiddle />
          <AboutSouth />
          <AboutTeam />
          <Footer />
        </>
    );
}

export default About