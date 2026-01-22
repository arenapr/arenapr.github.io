import '../../../App.css'
import BlogTitle from '../../BlogComponents/BlogTitle';
import BlogText from '../../BlogComponents/BlogText';
import CenteredImage from '../../Images/CenteredImage';
import Footer from '../../Footer';

function AliciaFloresBlog() {
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
          title="MEET ALICIA FLORES: THE DREAMER BEHIND ENEDINA ROSE"
        />
        <BlogText
          text="There is a new wave of creative talent emerging on the border, and 21-year-old designer Alicia Flores is
                one of the names leading that momentum. Currently finishing her last semester at EPCC Fashion and
                preparing to continue her studies at NMSU Alicia is already building a thoughtful, ambitious foundation for
                her brand, Enedina Rose."
        />
        <BlogText
          text="In our conversation, she opened up about her beginnings, her creative process, the pressures of being an
                emerging designer, and the lunar-inspired collection that has completely transformed the way she sees
                her work."
        />
        <CenteredImage
          imageSrc="/images/alicia-square.JPG"
          imageAlt="AliciaFloresImage"
          imageWidth="60vw"
        />
        <Footer />
      </div>
    </>
  )
}

export default AliciaFloresBlog