import './CenteredImage.css';

function CenteredImage({imageSrc, imageAlt, imageWidth = "100%", imageHeight = "auto", imagePadding = "0px",
                        mobileWidth = "100%"}) {
    return (
        <img
            className="centered-img"
            src={imageSrc}
            alt={imageAlt}
            style={{
                '--img-w': imageWidth,
                '--img-h': imageHeight,
                '--img-pad': imagePadding,
                '--img-mob-w': mobileWidth
            }}
        />
   );
}

export default CenteredImage