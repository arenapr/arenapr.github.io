import '../App.css'
import './HomeComponents.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function HomeComponents() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const slides = [
    "\“Agradezco la oportunidad de coincidir con ARENA, un espacio que continúa reafirmando su \
       compromiso con la moda y su labor por abrir y sostener nuevos contextos dentro de la ciudad \
       para fomentar el diálogo creativo, y la diversidad de identidades que dan forma a nuestra escena.\” \
       - Jackie Herald",
    "\"ARENA is the best!!!\" - Alfredo Rodriguez"
  ];

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // --- Auto-play Logic ---
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 10000); // Changes every 5 seconds

    // Cleanup function: This stops the timer if the user clicks 
    // manually or leaves the page.
    return () => clearInterval(timer);
  }, [currentIndex]); // Re-runs the effect whenever the slide changes

  return (
    <div className="offwhite-background">
      <div className="image-text-container">
        <div className="image">
          <img src="../images/christian-gertenbach-unsplash.jpg" alt="temp"/>
        </div>
        <div className="text">
          <h1>THE FRONT ROW<br/>BEGINS HERE</h1>
          <h2>ARENA</h2>
        </div>
      </div>
      <div className="strip-container">
        <div className="ticker">
          <span>FASHION. CULTURE. COMMUNITY.&nbsp;</span>
          <span>FASHION. CULTURE. COMMUNITY.&nbsp;</span>
          <span>FASHION. CULTURE. COMMUNITY.&nbsp;</span>
          <span>FASHION. CULTURE. COMMUNITY.&nbsp;</span>
          <span>FASHION. CULTURE. COMMUNITY.&nbsp;</span>
          <span>FASHION. CULTURE. COMMUNITY.&nbsp;</span>
          <span>FASHION. CULTURE. COMMUNITY.&nbsp;</span>
          <span>FASHION. CULTURE. COMMUNITY.&nbsp;</span>
          <span>FASHION. CULTURE. COMMUNITY.&nbsp;</span>
          <span>FASHION. CULTURE. COMMUNITY.&nbsp;</span>
          <span>FASHION. CULTURE. COMMUNITY.&nbsp;</span>
          <span>FASHION. CULTURE. COMMUNITY.&nbsp;</span>
          <span>FASHION. CULTURE. COMMUNITY.&nbsp;</span>
          <span>FASHION. CULTURE. COMMUNITY.&nbsp;</span>
        </div>
      </div>
      <div className="text-center-container">
        <h1>WHO WE ARE</h1>
        <h2>NOT JUST A FASHION PLATFORM</h2>
        <p>It’s a movement from the border to the world.</p>
        <p>Born in El Paso. Built to elevate emerging designers.<br/>
           Fueled by community, creativity and culture.<br/>
           We’re here to spotlight what others overlook.
        </p>
        <p>Join the movement, share the vision and be a part of the future of fashion.</p>
        <Link to="/about" className="red-button">
          MORE ABOUT US
        </Link>
      </div>
      <div className="image-text-container">
        <div className="text-left">
          <h1>SUPPORTING DESIGNERS.<br/>CELEBRATING COMMUNITY.</h1>
          <p>We are in constant search for emerging local talent in the borderland.<br/>
             Are you a local fashion designer that wants to showcase your work?
          </p>
          <p>Send us an email and let us know!</p>
          <Link to="/about" className="red-button">
            LEARN MORE
          </Link>
        </div>
        <div className="image">
          <img src="../images/christian-gertenbach-unsplash.jpg" alt="temp"/>
        </div>
      </div>
      <div className="blog-container">
        <h1>BLOG</h1>
        <div className="blog-list">
          <div className="individual-blog">
            <img src="/images/0-jamie-saenz-400x400.png" alt="JamieSaenzImage"/>
            <div className="blog-text">
              <h1>JAMIE SAENZ: DESIGNING WITH PASSION, PURPOSE, AND HEART</h1>
              <p>At just 16, Jamie Saenz is already making a name for herself in fashion. Border-made 
                and world-ready, Jamie is an emerging designer whose work is personal and emotional. 
                She believes fashion should help people feel seen, confident, and strong.
              </p>
            </div>
            <Link to="/blog/jamie-saenz-blog" className="white-button">
              READ MORE
            </Link>
          </div>
          <div className="individual-blog">
            <img src="/images/alicia-square.JPG" alt="AliciaFloresImage"/>
            <div className="blog-text">
              <h1>MEET ALICIA FLORES: THE DREAMER BEHIND ENEDINA ROSE</h1>
              <p>There is a new wave of creative talent emerging on the border, and 21-year-old designer 
                 Alicia Flores is one of the names leading that momentum.
              </p>
            </div>
            <Link to="/blog/alicia-flores-blog" className="white-button">
              READ MORE
            </Link>
          </div>
          <div className="individual-blog">
            <img src="/images/IMG_CAB578B9F867-1.jpeg" alt="JackieHeraldImage"/>
            <div className="blog-text">
              <h1>JACKIE HERALD: REDEFINING FASHION AS ART ON THE BORDER</h1>
              <p>If you’ve been keeping an eye on the emerging fashion scene in the border,
                 chances are you’ve heard the name Hilvenia Collective. If you haven’t, don’t
                 worry. You’re about to fall in love.
              </p>
            </div>
            <Link to="/blog/jackie-herald-blog" className="white-button">
              READ MORE
            </Link>
          </div>
        </div>
      </div>
      <img src="/images/fabric.jpeg" className="full-width-img" alt="fabric"/>
      <div className="testimonials-container">
        <h1>REAL WORDS FROM<br/>REAL CREATIVES</h1>
        <div className="carousel-container">
          <button className="arrow left" onClick={prevSlide}>❮</button>
          <div className="carousel-content">
            <div 
              className="slide-track" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {slides.map((text, index) => (
                <div key={index} className="slide">
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
          <button className="arrow right" onClick={nextSlide}>❯</button>
        </div>
      </div>
      <div className="strip-container">
        <div className="ticker">
          <span>FASHION. CULTURE. COMMUNITY.&nbsp;</span>
          <span>FASHION. CULTURE. COMMUNITY.&nbsp;</span>
          <span>FASHION. CULTURE. COMMUNITY.&nbsp;</span>
          <span>FASHION. CULTURE. COMMUNITY.&nbsp;</span>
          <span>FASHION. CULTURE. COMMUNITY.&nbsp;</span>
          <span>FASHION. CULTURE. COMMUNITY.&nbsp;</span>
          <span>FASHION. CULTURE. COMMUNITY.&nbsp;</span>
          <span>FASHION. CULTURE. COMMUNITY.&nbsp;</span>
          <span>FASHION. CULTURE. COMMUNITY.&nbsp;</span>
          <span>FASHION. CULTURE. COMMUNITY.&nbsp;</span>
          <span>FASHION. CULTURE. COMMUNITY.&nbsp;</span>
          <span>FASHION. CULTURE. COMMUNITY.&nbsp;</span>
          <span>FASHION. CULTURE. COMMUNITY.&nbsp;</span>
          <span>FASHION. CULTURE. COMMUNITY.&nbsp;</span>
        </div>
      </div>
    </div>
  )
}

export default HomeComponents
