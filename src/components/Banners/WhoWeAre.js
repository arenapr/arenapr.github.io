import './WhoWeAre.css';
import RoundedCornersButton from '../Buttons/RoundedCornersButton';

function WhoWeAre() {
  return (
    <div className="who-we-are-container">
      <h1>WHO WE ARE</h1>
      <h2>NOT JUST A FASHION PLATFORM</h2>
      <p>It’s a movement from the border to the world.</p>
      <p>Born in El Paso. Built to elevate emerging designers.<br/>
         Fueled by community, creativity and culture.<br/>
         We’re here to spotlight what others overlook.
      </p>
      <p>Join the movement, share the vision and be a part of the future of fashion.</p>
      <RoundedCornersButton
          to="/about"
          text="MORE ABOUT US"
          color="#CA3631"
          borderColor="#EAE7DF"
        />
    </div>
  );
}

export default WhoWeAre