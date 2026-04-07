import '../../../App.css'
import Footer from '../../Footer';
import BlogTitle from '../../BlogComponents/BlogTitle';
import CenteredImage from '../../Images/CenteredImage';
import CTA from '../../Banners/CTA';
import BlogText from '../../BlogComponents/BlogText';
import CenteredText from '../../Banners/CenteredText'
import Strip from '../../Strip/Strip';

function OriginStoryBlog() {
  // <!-- Google tag (gtag.js) -->
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-V4JVPM4E8R');
  
  window.scrollTo(0, 0);
  return (
    <>
      <div className="offwhite-background">
        <BlogTitle
          title="ORIGIN STORY"
        />
        <CenteredImage
          imageSrc="/images/manhattan-heights-el-paso-tx-thumb.jpg"
          imageAlt="ElPasoImage"
          imageWidth="60vw"
          imagePadding="2vw"
          mobileWidth="80%"
        />
        <BlogText>
          ARENA was born out of a deep love for fashion, art, and storytelling — and a frustration
          with how those things are dismissed when they come from the border. Fashion here has
          long been stigmatized as a hobby rather than recognized as a serious art form and
          industry. ARENA exists to change that: to amplify local Hispanic creative talent and
          prove that the frontera is not the edge of the story — it’s where a new one begins.
        </BlogText>
        <BlogText
          title="MISSION"
          backgroundColor="#CA3631"
          fontColor="#EAE7DF"
          titleAlign="center"
          fontSize="4vw"
        >
          ARENA showcases, educates, and amplifies the next generation of Hispanic fashion
          creatives from El Paso, Ciudad Juárez, and the broader border region — building a
          world-class fashion ecosystem that transforms borderland heritage into global
          influence.
        </BlogText>
        <BlogText
          title="CORE VALUES"
          backgroundColor="#EAE7DF"
          fontColor="#CA3631"
          titleAlign="center"
          fontSize="4vw"
        >
          CREATIVITY — We challenge designers and artists to draw from the depth of their
          identity — the borderland is not a limitation, it is the lens.
          <br/><br/>
          EMPOWERMENT — We give emerging creatives the platform, visibility, and resources
          to own their narrative and build on their own terms.
          <br/><br/>
          EDUCATION — We believe technical mastery is the ultimate form of creative rebellion.
          ARENA creates spaces to learn, share knowledge, and elevate the craft.
          <br/><br/>
          COMMUNITY — We foster a living community where creatives connect, support one
          another, and grow together through fashion and art.
          <br/><br/>
          COLLABORATION — We replace competition with collaboration — because when one
          of us rises, the entire borderland rises.
        </BlogText>
        <CTA
          borderColor="#CA3631"
          borderWidth="2px"
          title="WHO WE SERVE — OUR PEOPLE"
          text={["THE UNDERESTIMATED VISIONARIES",
                  <br/>,
                  "The creatives who are tired of being\
                  told their work is “just a hobby”,\
                  “crafts” or “folk art,” and are ready to\
                  claim their place in high fashion.",
                  <br/>, <br/>,
                  "The emerging Hispanic creative — the\
                  designer, stylist, photographer, or artist\
                  who is building their voice in the\
                  fashion world and sees the border not\
                  as a limitation, but as a launch pad.",
                  <br/>, <br/>,
                  "And the broader borderland\
                  community: the fashion-curious, the\
                  culture-proud, and the local\
                  businesses and institutions that want\
                  to invest in what’s next."]}
          imageSrc="../images/origin-girl.jpg"
          imageAlt="OriginGirlImg"
          imagePadding="0px"
          imageRight={true}
          showButton={false}
        />
        <CenteredText
          title={["ARENA PROMISES A STAGE FOR EVERY STORY",
                  <br/>,
                  "THE FASHION WORLD FORGOT TO LOOK FOR."]}
          font="ModeratFont"
          fontSize="2rem"
        />
        <CenteredImage
            imageSrc="/images/fabric.jpeg"
            imageAlt="fabric"
        />
        <Strip
            text="FASHION. CULTURE. COMMUNITY. "
        />
        <Footer />
      </div>
    </>
  )
}

export default OriginStoryBlog