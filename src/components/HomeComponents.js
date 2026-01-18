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
