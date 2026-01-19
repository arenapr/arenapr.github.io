import './CTA.css';
import RoundedCornersButton from '../Buttons/RoundedCornersButton'; '../Buttons/RoundedCornersButton';

function CTA({title, text, text2, imageSrc, imageAlt, titleFont, titleSize, 
              borderColor = "#EAE7DF", borderWidth = "0", showButton = true,
              imageRight = true}) {
  
  const orientationClass = imageRight ? 'image-right' : 'image-left';
  
  return (
    <div 
      className={`cta-container ${orientationClass}`}
      style={{
        borderTop: `${borderWidth} solid ${borderColor}`,
        borderBottom: `${borderWidth} solid ${borderColor}`
      }}>
      <div className="text-left">
        <h1 style={{fontFamily: titleFont, fontSize: titleSize}}>{title}</h1>
        <p>{text}</p>
        <p>{text2}</p>
        {showButton && (
          <RoundedCornersButton
            to="/about"
            text="LEARN MORE"
            color="#CA3631"
            borderColor="#EAE7DF"
          />
        )}
      </div>
      <div className="image">
        <img
          src={imageSrc}
          alt={imageAlt}
        />
      </div>
    </div>
  );
}

export default CTA