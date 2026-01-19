import './FullWidthImage.css';

function FullWidthImage(props) {
    return (
        <img
            className="full-width-img"
            src={props.imageSrc}
            alt={props.imageAlt}
        />
   );
}

export default FullWidthImage