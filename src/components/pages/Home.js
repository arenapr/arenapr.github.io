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
              imageSrc="../images/arena-website-639x6341.png"
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
              imageSrc="../images/arena-website-639x6343.png"
              imageAlt="CTAImg"
              buttonLink="/contact-us"
            />
            <BlogContainer
              title="BLOG"

              imageSrc="/images/priscilla-900x900Artboard-1.png"
              imageAlt="PriscillaMarquezImage"
              blogTitle="MORE THAN A CHAIN: PRISCILLA MARQUEZ IS REDEFINING PERMANENT JEWELRY"
              blogText="Meet Priscilla Marquez, the El Paso jewelry designer behind Dainty Gem 
                      — a permanent jewelry studio where every piece is built with intention, 
                      meaning, and a little bit of magic."
              blogTo="/blog/priscilla-marquez-blog"

              imageSrc2="/images/damaris-500x500 copy.webp"
              imageAlt2="DamarisAldereteImage"
              blogTitle2="RUFFELS, TULLE, AND 'NONSENSE': DAMARIS ALDERETE'S FANTASTICAL VISION"
              blogText2="Damaris' work doesn't just focus on aesthetics. It tells a story, turning 
                        emotion into shape, texture, and movement. And this is only the beginning 
                        of what she is building."
              blogTo2="/blog/damaris-alderete-blog"

              imageSrc3="/images/danielaC-square.jpg"
              imageAlt3="DanielaCarrancoImage"
              blogTitle3="A NEW VOICE IN FASHION IN THE SOUTHWEST: DANIELA CARRANCO"
              blogText3="Ask Daniela Carranco when she fell for fashion, and she’ll say it’s a 
                        feeling she’s always had—not a single moment."
              blogTo3="/blog/daniela-carranco-blog"
            />
            <CenteredImage
              imageSrc="/images/fabric.jpeg"
              imageAlt="fabric"
            />
            {/* <Slider
              title={["REAL WORDS FROM", <br/>, "REAL CREATIVES"]}
              slides={slides}
            /> */}
            <Strip
              text="FASHION. CULTURE. COMMUNITY. "
            />
          </div>
          <Footer />
        </>
    );
}

export default Home