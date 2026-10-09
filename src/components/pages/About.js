import '../../App.css'
import AboutHero from '../AboutHero';
import HomeSouth from '../HomeSouth';
import Footer from '../Footer';
import WordBlock from '../WordBlock';

function About() {
    window.scrollTo(0, 0);
    return (
        <>
          <AboutHero />
          <WordBlock 
            title="FASHION. CULTURE. COMMUNITY."
          />
          <HomeSouth />
          <Footer />
        </>
    );
}

export default About