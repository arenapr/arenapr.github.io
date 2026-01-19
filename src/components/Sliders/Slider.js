import './Slider.css';
import { useState, useEffect } from 'react';

function Slider(props) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = props.slides;

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
        <div className="slider-container">
            <h1>{props.title}</h1>
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
   );
}

export default Slider