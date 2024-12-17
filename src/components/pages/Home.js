import React from 'react'
import '../../App.css'
import HeroSection from '../HeroSection'
import HomeMiddle from '../HomeMiddle';
import Cards from '../Cards';
import Footer from '../Footer';

function Home() {
    window.scrollTo(0, 0);
    return (
        <>
          <HeroSection />
          <HomeMiddle />
          <Cards />
          <Footer />
        </>
    );
}

export default Home