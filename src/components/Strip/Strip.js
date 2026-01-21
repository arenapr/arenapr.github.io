import './Strip.css';

function Strip({text, backgroundColor = "#EAE7DF", textColor = "#CA3631", reverse = false}) {
  return (
      <div 
        className="strip-container" 
        style={{
          backgroundColor: backgroundColor,
          "--direction": reverse ? "reverse" : "normal"
        }}>
        <div className="ticker">
          {[...Array(20)].map((_, i) => (
            <span key={i} style={{ color: textColor }}>
              {text}
            </span>
          ))}
        </div>
      </div>
  );
}

export default Strip