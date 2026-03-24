import './Hero.css';
import RevealOnScroll from '../../effects/RevealOnScroll';

function Hero(props) {
  return (
      <div className="hero-container">
        <div className="image">
          <RevealOnScroll>
          <img
            src={props.imageSrc}
            alt={props.imageAlt}
          />
          </RevealOnScroll>
        </div>
        <div className="text">
          <h1>{props.title}</h1>
          <h2>ARENA</h2>
        </div>
      </div>
  );
}

export default Hero