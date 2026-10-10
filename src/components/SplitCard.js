import './SplitCard.css';
import RevealOnScroll from '../effects/RevealOnScroll';

function SplitCard({title, text, text2, imageSrc, imageAlt, titleFont, titleSize, 
              imageRight = true, imagePadding}) {
  
  const orientationClass = imageRight ? 'image-right' : 'image-left';
  
  return (
    <div 
      className={`split-card-container ${orientationClass}`}>
      <div className="text-left">
        <h1 style={{fontFamily: titleFont, fontSize: titleSize}}>{title}</h1>
        <p>{text}</p>
        <p>{text2}</p>
      </div>
      <div className="split-image">
        <RevealOnScroll direction={imageRight ? "right" : "left"}>
          <img
            src={imageSrc}
            alt={imageAlt}
          />
        </RevealOnScroll>
      </div>
    </div>
  );
}

export default SplitCard