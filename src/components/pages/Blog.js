import Footer from '../Footer';
import BlogStrip from '../Banners/BlogStrip';
import Strip from '../Strip/Strip';

function Blog() {
    // <!-- Google tag (gtag.js) -->
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-V4JVPM4E8R');
  
    window.scrollTo(0, 0);
    return (
        <>
        <div className="offwhite-background">
          <BlogStrip
            date="01 / 01 / 2026"
            title="JAMIE SAENZ: DESIGNING WITH PASSION, PURPOSE, AND HEART"
            text="At just 16, Jamie Saenz is already making a name for herself in fashion. 
                  Border-made and world-ready, Jamie is an emerging designer whose work is 
                  personal and emotional. She believes fashion should help people feel seen, 
                  confident, and strong."
            blogLink="/blog/jamie-saenz-blog"
            imageSrc="/images/0-jamie-saenz-400x400.png"
            imageAlt="JamieSaenzImage"
          />
          <BlogStrip
            date="11 / 20 / 2025"
            title="MEET ALICIA FLORES: THE DREAMER BEHIND ENEDINA ROSE"
            text="There is a new wave of creative talent emerging on the border, and 21-year-old designer 
                  Alicia Flores is one of the names leading that momentum."
            blogLink="/blog/alicia-flores-blog"
            imageSrc="/images/alicia-square.JPG"
            imageAlt="AliciaFloresImage"
          />
          <BlogStrip
            date="10 / 09 / 2025"
            title="JACKIE HERALD: REDEFINING FASHION AS ART ON THE BORDER"
            text="If you’ve been keeping an eye on the emerging fashion scene in the border,
                  chances are you’ve heard the name Hilvenia Collective. If you haven’t, don’t
                  worry. You’re about to fall in love."
            blogLink="/blog/jackie-herald-blog"
            imageSrc="/images/IMG_CAB578B9F867-1.jpeg"
            imageAlt="JackieHeraldImage"
          />
          <BlogStrip
            date="08 / 07 / 2025"
            title="HILVENIA COLLECTIVE: STYLE, IDENTITY, AND BORDERLAND DREAMS"
            text="If you’ve been keeping an eye on the emerging fashion scene in Ciudad Juárez, chances are you’ve
                  heard the name Hilvenia Collective. If you haven’t, don’t worry. You’re about to fall in love."
            blogLink="/blog/hilvenia-blog"
            imageSrc="/images/DSC_0234-square.png"
            imageAlt="HilveniaImage"
          />
          <BlogStrip
            date="06 / 05 / 2025"
            title="CLASSICALLY EXTRAVAGANT: INSIDE HYPNOSIS"
            text="At just 24 years old, Nath de La Mora has already carved a name for himself in the fashion world—but
                  his journey started humbly, at a sewing machine in his grandmother’s living room."
            blogLink="/blog/nath-mora-blog"
            imageSrc="/images/nath-500x500.png"
            imageAlt="NathDeLaMoraImage"
          />
          <BlogStrip
            date="01 / 17 / 2025"
            title="MAKING CONNECTIONS: NICKO SENA'S MEANINGLESS CONNECTION"
            text="In the world of fashion, where trends come and go like seasons, Nicko Sena is crafting a legacy that
                  transcends the transient."
            blogLink="/blog/nicko-sena-blog"
            imageSrc="/images/Meaningless_1080x1080.png"
            imageAlt="NickoSenaImage"
          />
          <BlogStrip
            date="09 / 09 / 2024"
            title="JANACE GRIFFIN IS FOLLOWING HER DREAMS"
            text="Janace Griffin—better known as Junkdredz—is a creative force who’s done it all and still manages 
                  to keep us guessing about what she’ll tackle next. A published children’s book author, founder 
                  of The El Paso Black Arts Association, and all-around artistic powerhouse, Janace doesn’t just 
                  stop there. She’s also out here chasing her dream of being a fashion designer—and absolutely 
                  crushing it."
            blogLink="/blog/janace-griffin-blog"
            imageSrc="/images/Janace.png"
            imageAlt="JanaceGriffinImage"
          />
          <BlogStrip
            date="08 / 16 / 2024"
            title="SERGIO ESTRADA AND THE PURSUIT OF EXCELLENCE"
            text="When you think of fashion, you might picture glamorous runways, polished collections, and glossy
                  magazine covers. But for designer Sergio Estrada, fashion is far more personal."
            blogLink="/blog/sergio-estrada-blog"
            imageSrc="/images/6par6noid6.jpeg"
            imageAlt="SergioEstradaImage"
          />
          <BlogStrip
            date="10 / 24 / 2024"
            title="LET'S TALK ABOUT ALEXIS LOPEZ ECLECTIC STYLE"
            text="When it comes to fashion, Alexis Lopez doesn’t just play by the rules—she rewrites them. 
                  Known for her bold style and fearless approach, Alexis burst onto the scene in July 2023 
                  with the launch of her brand, Hex by Lex, and her debut collection. From day one, she’s been 
                  turning heads and proving that art and fashion don’t just mix—they collide beautifully in her 
                  daring, yet wearable designs."
            blogLink="/blog/alexis-lopez-blog"
            imageSrc="/images/hex_by_lex.jpg"
            imageAlt="AlexisLopezImage"
          />
          <br/>
          <Strip
              text="FASHION. CULTURE. COMMUNITY. "
              textColor="#EAE7DF"
              backgroundColor="#CA3631"
          />
          <Strip
              text="FASHION. CULTURE. COMMUNITY. "
          />
          <Footer />
        </div>
        </>
    );
}

export default Blog