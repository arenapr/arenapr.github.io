import './WordBlock.css'

function WordBlock(props) {
  return (
    <div className='word-block-container'>
      <div className='word-block-inner'>
        <h1>{props.title}</h1>
      </div>
    </div>
  )
}

export default WordBlock
