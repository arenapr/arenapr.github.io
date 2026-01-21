import './IndividualBlog.css';
import RoundedCornersButton from '../Buttons/RoundedCornersButton';

function IndividualBlogContainer(props) {
  return (
    <div className="individual-blog">
        <img
            src={props.imageSrc}
            alt={props.imageAlt}
        />
        <div className="blog-text">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>
        <RoundedCornersButton
            to={props.to}
            text="READ MORE"
            textColor="#CA3631"
            color="#EAE7DF"
            borderColor="#CA3631"
        />
    </div>
  );
}

export default IndividualBlogContainer