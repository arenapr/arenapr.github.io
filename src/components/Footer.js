import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <h1>ARENA</h1>
        <h2>hello@the-arena-project.com</h2>
      </div>
      <div className="footer-right">
        <Link to='https://www.instagram.com/arena__pr/' target="_blank" rel="noopener noreferrer" className='footer-links'>
          INSTAGRAM
        </Link>
        <Link to='https://www.youtube.com/@arena-pr/videos' target="_blank" rel="noopener noreferrer" className='footer-links'>
          YOUTUBE
        </Link>
      </div>
    </div>
  )
}

export default Footer
