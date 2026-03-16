import './BlogText.css';

function BlogText({ children, title }) {
  return (
      <div className="blog-paragraph">
        {title && <h1>{title}</h1>}
        <p>{children}</p>
      </div>
  );
}

export default BlogText