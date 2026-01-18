import './CTA.css';
import RoundedCornersButton from '../Buttons/RoundedCornersButton'; '../Buttons/RoundedCornersButton';

function CTA(props) {
  return (
    <div className="hero-container">
      <div className="text-left">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <p>{props.text2}</p>
        <RoundedCornersButton
          to="/about"
          text="LEARN MORE"
          color="#CA3631"
          borderColor="#EAE7DF"
        />
      </div>
      <div className="image">
        <img
          src={props.imageSrc}
          alt={props.imageAlt}
        />
      </div>
    </div>
  );
}

export default CTA