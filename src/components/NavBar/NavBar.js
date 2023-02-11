import { Link } from 'react-router-dom';
import './NavBar.css'
import profilephoto from './images/profilephoto.png'

export default function NavBar({setOnPage}) {
  
function handleClick(e) {
  console.log("Before Handle Click Page Name: ")
  setOnPage(e.target.name)
  console.log("After Handle Click Page Name: ")
}

  return (
    <nav className='navbar'>
      <span className="navbar-left">
      <Link to="/"><img src={profilephoto} alt="Profile" className="nav-logo"/></Link>
      <Link to="/" className='navbar-name' name="antony yu." onClick= {handleClick}>Antony Yu</Link>
      </span>
      <span>
      <Link to="/about" className='navbar-link' name="about." onClick= {handleClick}>About</Link>
      <Link to="/contact" className='navbar-link' name="contact." onClick= {handleClick}>Contact</Link>
      </span>
    </nav>
  );
}