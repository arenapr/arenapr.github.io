import './BlogStrip.css';
import { Link } from 'react-router-dom';

function BlogStrip(props) {
    return (
        <div className="blog-strip-container">
            <div className="blog-strip-text">
                <p>{props.date}</p>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <Link 
                    to={props.blogLink} 
                    className="blog-strip-link">
                    Read More
                </Link>
            </div>
            <a href={`#${props.blogLink}`} className="blog-strip-image">
                <img
                    src={props.imageSrc}
                    alt={props.imageAlt}
                />
            </a>
        </div>
    );
}

export default BlogStrip