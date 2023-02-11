import LinkedInLogo from './images/linkedin-logo.svg'
import GithubLogo from './images/github-logo.svg'
import EmailIcon from './images/email-icon.svg'
import './SocialsBar.css'
export default function SocialsBar() {
    return (
        <nav className='socials-bar'>
            <a href="mailto:hello@antonyyu.com">
                <img src={EmailIcon} alt="Email Icon" className="socials-icon" />
            </a>
            <a href="https://github.com/Antonomy">
                <img src={GithubLogo} alt="Github Logo" className="socials-icon" />
            </a>
            <a href="https://www.linkedin.com/in/antonyyu/">
                <img src={LinkedInLogo} alt="LinkedIn Logo" className="socials-icon" />
            </a>
        </nav>
    );
}