import './BlogTitle.css';

function BlogTitle(props) {
  return (
      <div className="blog-title">
        <h1>{props.title}</h1>
      </div>
  );
}

export default BlogTitle