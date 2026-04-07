import './BlogText.css';

function BlogText({ children, title, backgroundColor = "#EAE7DF", fontColor = "#CA3631",
                    titleAlign = "left", fontSize = "20px"}) {
  return (
      <div className="blog-paragraph" style={{backgroundColor: backgroundColor}}>
        {title && <h1 style={{'--title-size': fontSize, color: fontColor, '--title-align':titleAlign}}>{title}</h1>}
        <p style={{color: fontColor}}>{children}</p>
      </div>
  );
}

export default BlogText