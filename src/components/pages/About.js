import '../../App.css'
import Hero from '../Hero/Hero';
import Strip from '../Strip/Strip';
import CenteredText from '../Banners/CenteredText';
import CTA from '../Banners/CTA';
import FullWidthImage from '../Images/FullWidthImage';
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
                <CTA
                    borderColor="#CA3631"
                    borderWidth="2px"
                    title="MEET THE FOUNDER"
                    text="ARENA was born out of a deep love for fashion, art, and the creative voices often
                          overlooked in border towns. After years of working in creative industries, founder
                          Fernanda Ortiz recognized a gap in visibility and support for emerging designers in El Paso
                          and Ciudad Juárez."
                    text2="Inspired by the cultural richness and resilience of the borderland, she created
                           ARENA not just as a platform, but as a movement — one that amplifies local talent
                           and redefines the narrative of fashion coming from these communities."
                    imageSrc="../images/FER.jpg"
                    imageAlt="FounderImg"
                    imageRight={false}
                    showButton={false}
                />
                <CenteredText
                    title="WHERE THE NEXT GENERATION OF FASHION TAKES THE STAGE"
                    font="ModeratFont"
                    fontSize="2rem"
                />
                <FullWidthImage
                    imageSrc="/images/fabric.jpeg"
                    imageAlt="fabric"
                />
                <CenteredText
                    title={["THE FUTURE OF FASHION", <br/>, "LIVES HERE"]}
                    showButton={true}
                    borderColor="#CA3631"
                    borderWidth="2px"
                />
                <Strip
                    text="FASHION. CULTURE. COMMUNITY. "
                />
                <Footer />
            </div>
        </>
    );
}

export default About