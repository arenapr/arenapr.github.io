import './BlogText.css';

function BlogText({ children, title, backgroundColor = "#EAE7DF", fontColor = "#CA3631",
                    titleAlign = "flex-start"}) {
  return (
      <div className="blog-paragraph" style={{backgroundColor: backgroundColor}}>
        {title && <h1 style={{color: fontColor, '--title-align':titleAlign}}>{title}</h1>}
        <p style={{color: fontColor}}>{children}</p>
      </div>
  );
}

export default BlogText