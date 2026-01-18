import { Link } from 'react-router-dom';
import './RoundedCornersButton.css';

function RoundedCornersButton({ to, text, textColor, color, borderColor }) {
  return (
    <Link 
      to={to} 
      className="rounded-corners-button" 
      style={{ 
        '--btn-color': textColor,
        backgroundColor: color,
        '--btn-borderColor': borderColor || color, // If no border color is sent, use the main color
        borderStyle: 'solid',
        borderWidth: '2px'
      }}
    >
      {text}
    </Link>
  );
}

export default RoundedCornersButton;