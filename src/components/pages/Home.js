import React, {useEffect} from 'react'
import '../../App.css'
import HomeNorth from '../HomeNorth'
import HomeMiddle from '../HomeMiddle';
import HomeMiddle2 from '../HomeMiddle2';
import HomeSouth from '../HomeSouth';
import Footer from '../Footer';
import { useLocation } from 'react-router-dom';

function Home() {
    const location = useLocation();

    useEffect(() => {
      if (location.state?.scrollPosition) {
        const contactUsElement = document.querySelector(location.state.scrollPosition);
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const offset = navbarHeight;
        const topPosition = contactUsElement.offsetTop - offset;

        window.scrollTo({
          top: topPosition,
          behavior: 'smooth',
        });
      }
      else{
        window.scrollTo(0, 0);
      }
    }, [location.state]);
    
    return (
        <>
          <HomeNorth />
          <HomeMiddle />
          <HomeMiddle2 />
          <HomeSouth />
          <Footer />
        </>
    );
}

export default Home