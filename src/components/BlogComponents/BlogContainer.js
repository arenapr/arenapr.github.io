import './BlogContainer.css';
import IndividualBlog from './IndividualBlog';
import { Link } from 'react-router-dom';

function BlogContainer(props) {
  return (
    <div className="blog-container">
        <h1>{props.title}</h1>
        <div className="blog-list">
          <IndividualBlog
            imageSrc={props.imageSrc}
            imageAlt={props.imageAlt}
            title={props.blogTitle}
            text={props.blogText}
            to={props.blogTo}
          />
          <IndividualBlog
            imageSrc={props.imageSrc2}
            imageAlt={props.imageAlt2}
            title={props.blogTitle2}
            text={props.blogText2}
            to={props.blogTo2}
          />
          <IndividualBlog
            imageSrc={props.imageSrc3}
            imageAlt={props.imageAlt3}
            title={props.blogTitle3}
            text={props.blogText3}
            to={props.blogTo3}
          />
        </div>
    </div>
  );
}

export default BlogContainer