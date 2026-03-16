import '../../../App.css'
import BlogTitle from '../../BlogComponents/BlogTitle';
import BlogText from '../../BlogComponents/BlogText';
import CenteredImage from '../../Images/CenteredImage';
import Footer from '../../Footer';
import BlockImages from '../../Images/BlockImages';

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
        <BlogText>
          There is a new wave of creative talent emerging on the border, and 21-year-old designer Alicia Flores is
          one of the names leading that momentum. Currently finishing her last semester at EPCC Fashion and
          preparing to continue her studies at NMSU Alicia is already building a thoughtful, ambitious foundation for
          her brand, Enedina Rose.
        </BlogText>
        <BlogText>
          In our conversation, she opened up about her beginnings, her creative process, the pressures of being an
          emerging designer, and the lunar-inspired collection that has completely transformed the way she sees
          her work.
        </BlogText>
        <CenteredImage
          imageSrc="/images/alicia-square.JPG"
          imageAlt="AliciaFloresImage"
          imageWidth="60vw"
          imagePadding="2vw"
          mobileWidth="80%"
        />
        <BlogText
          title="DISCOVERING FASHION (AND HERSELF) ONE EXPERIMENT AT A TIME"
        >
          Alicia didn’t grow up planning to become a designer. In fact, she once thought about studying medicine.
          But everything shifted when, as a teenager, she found herself cutting, reshaping, and hand-sewing her own
          clothes simply because the outfits she imagined didn’t exist in stores.
        </BlogText>
        <BlogText>
          Her parents noticed before she did.
          <br/>
          “They would tell me, ‘You style your outfits really well,’” she recalled.
        </BlogText>
        <BlogText>
          It wasn’t until her mom encouraged her to draw the pieces she envisioned and make them herself that she
          realized how naturally design came to her.
        </BlogText>
        <BlogText>
          By the time she discovered EPCC's Fashion program after high school, she knew she had found the right path."
          <br/>
          “I didn’t know how to sew at all when I entered the program,” she said. “But once I started making things with my hands, I knew this is where I belonged.”
        </BlogText>
        <BlockImages
          imageSrc="../images/alicia1.jpg"
          imageAlt="AliciaFloresImage"
          imageSrc2="../images/alicia2.jpg"
          imageAlt2="AliciaFloresImage"
        />
        <BlogText
          title="FINDING INSPIRATION EVERYWHERE—ESPECIALLY IN THE MOON"
        >
          Music, long nighttime walks, and photography fuel much of Alicia’s creative thinking. She listens to The
          Marías and Pink Floyd at full volume to picture silhouettes, textures, and moods. She also spends a lot of
          time photographing the moon, which eventually became the anchor for her newest work.
        </BlogText>
        <BlogText>
          Her current collection titled “Selene” Alicia explores the eight phases of the moon, through eight
          womenswear looks and eight menswear looks. The project has become a full creative journey: research,
          sketchbooks, fabric experiments, and unexpected materials.
        </BlogText>
        <BlogText>
          One of the most striking elements she developed is a bustier made of joint cement, molded to mimic the surface and texture of the lunar landscape."
          <br/>
          “Everyone told me no one would wear cement,” she laughed, “but I’m figuring it out. I want to try something new.”
        </BlogText>
        <BlogText>
          Alicia dove deep into NASA imagery to build her color palette, studying how the moon shifts in hue
          depending on light, shadow, and distance. What began as a simple idea evolved into a collection with
          layers of symbolism, technique, and storytelling.
        </BlogText>
        <BlogText>
          Alicia will present the womenswear portion of this project in May at EPCC, with plans to show the full
          collection—including menswear—later next year during a local Fashion Week event.
        </BlogText>
        <CenteredImage
          imageSrc="/images/alicia3.png"
          imageAlt="AliciaFloresImage"
          imageWidth="60vw"
          imagePadding="2vw"
          mobileWidth="80%"
        />
        <BlogText
          title="BALANCING PRESSURE, CREATIVITY, AND GROWTH"
        >
          Like many emerging designers, Alicia is learning to navigate time, demanding deadlines, and the emotional
          pressure that comes with creative work. She admits that one of her biggest challenges is managing her
          schedule and knowing when to step back.
        </BlogText>
        <BlogText>
          After attempting to produce ten outfits for a fashion show within three months, she experienced her first anxiety attack.
          <br/>
          “That taught me a lot,” she said. “I like working under pressure, but I also learned the importance of resting. My health has to come first.”
          <br/>
          She also discussed the challenges she faces with communication, such as presenting her work, public 
          speaking, and trusting her ideas. As an introverted designer, stepping out of her comfort zone remains a 
          part of her learning process, but she takes pride in how far she has come.
        </BlogText>
        <BlogText
          title="THE BORDERLAND FASHION COMMUNITY: A CREATIVE ‘TRIBE’ IN THE MAKING"
        >
          Throughout our conversation, Alicia expressed how meaningful it is to see more students and young
          designers entering the industry in both El Paso and Juárez.
        </BlogText>
        <BlogText>
          “When I started at EPCC, I was the only one from my high school studying fashion,” she said. “Now I’m
          seeing more people join. It feels like we’re all building something together.”
        </BlogText>
        <BlogText>
          She believes that the regional industry is growing, but it still requires more community support and
          recognition. While art, music, and performance already enjoy strong followings, fashion is still striving to
          be acknowledged as a legitimate art form, despite its complexity, craftsmanship, and cultural significance.
        </BlogText>
        <BlogText
          title="LOOKING AHEAD: THE FUTURE OF ENEDINA ROSE"
        >
          When asked about her long-term goals, Alicia answered without hesitation: She dreams of establishing a
          studio—complete with machines, work tables, and a team—and expanding Enedina Rose into a brand that
          people recognize and admire.
          <br/>
          “I want people to hear the name and know it represents something meaningful,” she said.
        </BlogText>
        <BlogText>
          Her dream is not just global reach, but creative independence: a space where she can explore,
          experiment, and lead a brand shaped by elegance, curiosity, and innovation.
          <br/>
          After chatting with Alicia, it’s obvious she’s set her sights high—she’s aiming for the moon and has a real
          shot at making it happen.
        </BlogText>
        <BlogText>
          Follow Alicia’s journey on Instagram 
          <a href="https://instagram.com/enedina_rose_"> @enedina_rose_ </a> 
          and keep an eye out for her upcoming collection.
        </BlogText>
        <Footer />
      </div>
    </>
  )
}

export default AliciaFloresBlog