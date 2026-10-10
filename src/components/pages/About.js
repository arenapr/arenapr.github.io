import '../../App.css'
import AboutHero from '../AboutHero';
import Footer from '../Footer';
import WordBlock from '../WordBlock';
import WordBlock2 from '../WordBlock2';
import SplitCard from '../SplitCard';

function About() {
    window.scrollTo(0, 0);
    return (
        <>
          <AboutHero />
          <WordBlock 
            title="FASHION. CULTURE. COMMUNITY."
          />
          <SplitCard
            title={["The border is not a limit.", <br/>, "It's a launchpad."]}
            text={["ARENA began as a response to a lack of visibility and support for \
                    local fashion designers. We see the border as the next fashion capital \
                    — not defined by runways in Paris or New York, but by the stories \
                    we wear and the culture we live.", <br/>,
                   "This is fashion from the edge of two worlds."]}
            imageSrc="../images/jc-gellidon-xDsq3u3ZUqc-unsplash.png"
            imageAlt="CTAImg"
          />
          <WordBlock2 
            title="The fearlessness and passion of young designers make the future of fashion hopeful."
            text="- Richard Haines"
          />
          <Footer />
        </>
    );
}

export default About