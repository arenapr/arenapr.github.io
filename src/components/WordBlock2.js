import './WordBlock2.css'

function WordBlock2(props) {
  return (
    <div className='word-block2-container'>
      <div className='word-block2-inner'>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default WordBlock2
