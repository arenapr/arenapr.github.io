import './BlogText.css';

function BlogText(props) {
  return (
      <div className="blog-paragraph">
        <p>{props.text}</p>
      </div>
  );
}

export default BlogText