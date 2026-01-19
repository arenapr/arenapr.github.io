import '../../App.css'
import Hero from '../Hero/Hero';
import Strip from '../Strip/Strip';
import CenteredText from '../Banners/CenteredText';
import CTA from '../Banners/CTA';
import Footer from '../Footer';

function About() {
    window.scrollTo(0, 0);
    return (
        <>
            <div className="offwhite-background">
                <Hero 
                    imageSrc="../images/christian-gertenbach-unsplash.jpg"
                    imageAlt="HeroImg"
                    title="ABOUT"
                />
                <Strip
                    text="FASHION. CULTURE. COMMUNITY. "
                    textColor="#EAE7DF"
                    backgroundColor="#CA3631"
                />
                <CenteredText
                    title={["THE BORDER IS NOT A LIMIT.", <br/>, "IT'S A LAUNCH PAD"]}
                />
                <CTA
                    titleFont="ModeratFont"
                    titleSize="1.5rem"
                    borderColor="#CA3631"
                    borderWidth="2px"
                    title="ARENA BEGAN AS A RESPONSE TO A LACK OF VISIBILITY AND SUPPORT LOCAL FASHION DESIGNERS"
                    text="It’s not just a platform — it’s a movement that reclaims space, tells
                         stories, and disrupts industry expectations from the edge of two worlds."
                    imageSrc="../images/christian-gertenbach-unsplash.jpg"
                    imageAlt="CTAImg"
                />
                <CenteredText
                    title={["\“BRIDGING CITIES.", <br/>, "ELEVATING CREATORS.\”"]}
                />
                <Footer />
            </div>
        </>
    );
}

export default About