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
            />
            <BlogContainer
              title="BLOG"
              imageSrc="/images/damaris-500x500 copy.webp"
              imageAlt="DamarisAldereteImage"
              blogTitle="RUFFELS, TULLE, AND 'NONSENSE': DAMARIS ALDERETE'S FANTASTICAL VISION"
              blogText="Damaris' work doesn't just focus on aesthetics. It tells a story, turning 
                        emotion into shape, texture, and movement. And this is only the beginning 
                        of what she is building."
              blogTo="/blog/damaris-alderete-blog"

              imageSrc2="/images/danielaC-square.jpg"
              imageAlt2="DanielaCarrancoImage"
              blogTitle2="A NEW VOICE IN FASHION IN THE SOUTHWEST: DANIELA CARRANCO"
              blogText2="Ask Daniela Carranco when she fell for fashion, and she’ll say it’s a 
                        feeling she’s always had—not a single moment."
              blogTo2="/blog/daniela-carranco-blog"

              imageSrc3="/images/andyc-800x800.jpg"
              imageAlt3="AndyCastanedaImage"
              blogTitle3="SLOWING DOWN, STITCH BY STITCH WITH ANDY CASTANEDA"
              blogText3="If you’ve ever thought crochet was just a “grandma hobby,” Andy Castaneda is 
                        here to completely flip that idea on its head."
              blogTo3="/blog/andy-castaneda-blog"
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