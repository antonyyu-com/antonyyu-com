import './ContactPage.css'
import LinkedInLogo from './images/linkedin-logo.svg'
import GithubLogo from './images/github-logo.svg'
import EmailIcon from './images/email-icon.svg'
export default function ContactPage() {

  return (
    <div className="app-page">
      <a href="mailto:hello@antonyyu.com" className="contact-link">
        <img src={EmailIcon} alt="Email Icon" className="contact-icon" />
        <text className="contact-handle">hello@antonyyu.com</text>
      </a>
      <br />
      <a href="https://github.com/Antonomy" className="contact-link">
        <img src={GithubLogo} alt="Github Logo" className="contact-icon" />
        <text className="contact-handle">Antonomy</text>
      </a><br />
      <a href="https://www.linkedin.com/in/antonyyu/" className="contact-link">
        <img src={LinkedInLogo} alt="LinkedIn Logo" className="contact-icon" />
        <text className="contact-handle">Antony Yu</text>
      </a><br />
    </div>
  );
}