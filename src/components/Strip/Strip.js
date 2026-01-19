import './Strip.css';

function Strip({text, backgroundColor = "#EAE7DF", textColor = "#CA3631"}) {
  return (
      <div className="strip-container" style={{backgroundColor: backgroundColor}}>
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