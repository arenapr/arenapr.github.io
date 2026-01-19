import './CenteredText.css';
import RoundedCornersButton from '../Buttons/RoundedCornersButton';

function CenteredText({title, font, fontSize, showButton = false, borderColor = "#EAE7DF", 
                       borderWidth = "0"}) {
    return (
        <div 
            className="centered-text-container"
            style={{
                borderBottom: `${borderWidth} solid ${borderColor}`
            }}>
            <h1 style={{fontFamily: font, fontSize: fontSize}}>{title}</h1>
            {showButton && (
                <RoundedCornersButton
                    to="/about"
                    text="LEARN MORE"
                    color="#EAE7DF"
                    borderColor="#CA3631"
                />
            )}
        </div>
    );
}

export default CenteredText