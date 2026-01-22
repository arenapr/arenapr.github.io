import './CenteredImage.css';

function CenteredImage({imageSrc, imageAlt, imageWidth = "100%", imageHeight = "auto"}) {
    return (
        <img
            className="centered-img"
            src={imageSrc}
            alt={imageAlt}
            style={{
                width:imageWidth,
                height:imageHeight
            }}
        />
   );
}

export default CenteredImage