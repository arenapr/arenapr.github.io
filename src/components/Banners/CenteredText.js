import './CenteredText.css';

function CenteredText(props) {
    return (
        <div className="centered-text-container">
            <h1>{props.title}</h1>
        </div>
    );
}

export default CenteredText