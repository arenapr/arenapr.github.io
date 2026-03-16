import './BlockImages.css';

function BlockImages({imageSrc, imageSrc2, imageAlt, imageAlt2, imageWidth = "100%", imageHeight = "auto", 
                      imagePadding = "0px"}) {
  return (
    <div className='block-images'>
        <img
            src={imageSrc}
            alt={imageAlt}
            style={{
                width:imageWidth,
                height:imageHeight,
                paddingBlock:imagePadding
            }}
        />
        <img
            src={imageSrc2}
            alt={imageAlt2}
            style={{
                width:imageWidth,
                height:imageHeight,
                paddingBlock:imagePadding
            }}
        />
    </div>
  );
}

export default BlockImages