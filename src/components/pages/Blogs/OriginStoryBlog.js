import '../../../App.css'
import Footer from '../../Footer';
import BlogTitle from '../../BlogComponents/BlogTitle';
import CenteredImage from '../../Images/CenteredImage';
import CenteredText from '../../Banners/CenteredText';
import BlogText from '../../BlogComponents/BlogText';

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
        >
          ARENA showcases, educates, and amplifies the next generation of Hispanic fashion
          creatives from El Paso, Ciudad Juárez, and the broader border region — building a
          world-class fashion ecosystem that transforms borderland heritage into global
          influence.
        </BlogText>
        <Footer />
      </div>
    </>
  )
}

export default OriginStoryBlog