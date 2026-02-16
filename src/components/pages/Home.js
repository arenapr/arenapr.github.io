import {useEffect} from 'react';
import '../../App.css';
import Hero from '../Hero/Hero';
import Strip from '../Strip/Strip';
import WhoWeAre from '../Banners/WhoWeAre';
import CTA from '../Banners/CTA';
import BlogContainer from '../BlogComponents/BlogContainer';
import CenteredImage from '../Images/CenteredImage';
import Slider from '../Sliders/Slider';
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

    const slides = [
        "\“Agradezco la oportunidad de coincidir con ARENA, un espacio que continúa reafirmando su \
        compromiso con la moda y su labor por abrir y sostener nuevos contextos dentro de la ciudad \
        para fomentar el diálogo creativo, y la diversidad de identidades que dan forma a nuestra escena.\” \
        - Jackie Herald",
        "\"ARENA is the best!!!\" - Alfredo Rodriguez"
    ];
    
    return (
        <>
          <div className="offwhite-background">
            <Hero 
              imageSrc="../images/arena-website-639x6341.jpg"
              imageAlt="HeroImg"
              title={["THE FRONT ROW", <br/>, "BEGINS HERE"]}
            />
            <Strip
              text="FASHION. CULTURE. COMMUNITY. "
            />
            <WhoWeAre/>
            <CTA
              borderColor="#CA3631"
              borderWidth="2px"
              title={["SUPPORTING DESIGNERS.", <br/>, "CELEBRATING COMMUNITY."]}
              text={["We are in constant search for emerging local talent in the borderland.", <br/>,
                     "Are you a local fashion designer that wants to showcase your work?"]}
              text2="Send us an email and let us know!"
              imageSrc="../images/arena-website-639x6343.jpg"
              imageAlt="CTAImg"
            />
            <BlogContainer
              title="BLOG"
              imageSrc="/images/0-jamie-saenz-400x400.png"
              imageAlt="JamieSaenzImage"
              blogTitle="JAMIE SAENZ: DESIGNING WITH PASSION, PURPOSE, AND HEART"
              blogText="At just 16, Jamie Saenz is already making a name for herself in fashion. Border-made 
                       and world-ready, Jamie is an emerging designer whose work is personal and emotional. 
                       She believes fashion should help people feel seen, confident, and strong."
              blogTo="/blog/jamie-saenz-blog"

              imageSrc2="/images/alicia-square.JPG"
              imageAlt2="AliciaFloresImage"
              blogTitle2="MEET ALICIA FLORES: THE DREAMER BEHIND ENEDINA ROSE"
              blogText2="There is a new wave of creative talent emerging on the border, and 21-year-old designer 
                        Alicia Flores is one of the names leading that momentum."
              blogTo2="/blog/alicia-flores-blog"

              imageSrc3="/images/IMG_CAB578B9F867-1.jpeg"
              imageAlt3="JackieHeraldImage"
              blogTitle3="JACKIE HERALD: REDEFINING FASHION AS ART ON THE BORDER"
              blogText3="If you’ve been keeping an eye on the emerging fashion scene in the border,
                        chances are you’ve heard the name Hilvenia Collective. If you haven’t, don’t
                        worry. You’re about to fall in love."
              blogTo3="/blog/jackie-herald-blog"
            />
            <CenteredImage
              imageSrc="/images/fabric.jpeg"
              imageAlt="fabric"
            />
            <Slider
              title={["REAL WORDS FROM", <br/>, "REAL CREATIVES"]}
              slides={slides}
            />
            <Strip
              text="FASHION. CULTURE. COMMUNITY. "
            />
          </div>
          <Footer />
        </>
    );
}

export default Home