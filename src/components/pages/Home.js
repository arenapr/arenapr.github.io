import {useEffect} from 'react'
import '../../App.css'
import HomeComponents from '../HomeComponents'
import Footer from '../Footer';
import { useLocation } from 'react-router-dom';

function Home() {
  // <!-- Google tag (gtag.js) -->
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-V4JVPM4E8R');
  
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
          <HomeComponents />
          <Footer />
        </>
    );
}

export default Home