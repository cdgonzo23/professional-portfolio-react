import LinkedIn from '../assets/linkedin.png'
import GitHub from '../assets/github.png'
import Stack from '../assets/stack.png'

function Footer() {
  return (
    <footer>
        <a href="https://github.com/cdgonzo23" className="text-light">
        <img className='img-link' src={GitHub} alt='GitHub Logo'/>
        </a>
        <a href="https://www.linkedin.com/in/cd-gonzo4223" className="text-light">
          <img className='img-link' src={LinkedIn} alt='LinkedIn Logo'/>
        </a>
        <a style={{marginLeft: 8}} href="https://stackoverflow.com/users/22528990/cd-gonzo" className="text-light">
        <img className='img-link' src={Stack} alt='Stack OverFlow Logo'/>
        </a>
    </footer>
  )
}

export default Footer