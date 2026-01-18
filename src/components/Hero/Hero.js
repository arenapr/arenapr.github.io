import './Hero.css';

function Hero(props) {
  return (
      <div className="hero-container">
        <div className="image">
          <img
            src={props.imageSrc}
            alt={props.imageAlt}
          />
        </div>
        <div className="text">
          <h1>{props.title}</h1>
          <h2>ARENA</h2>
        </div>
      </div>
  );
}

export default Hero