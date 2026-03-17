import React from 'react'

function Header ({ resumeData }) {
  const { name, landingIntro, socialLinks = [], email } = resumeData

  return (
    <header id='home' className='hero'>
      <div className='shell'>
        <nav className='top-nav' aria-label='Primary navigation'>
          <a className='brand' href='#home'>{name}</a>
          <ul className='top-nav-links'>
            <li><a href='#about'>About</a></li>
            <li><a href='#resume'>Resume</a></li>
            <li><a href='#contact'>Contact</a></li>
          </ul>
        </nav>

        <div className='hero-content'>
          <p className='hero-kicker'>Software Engineer · Product & Program Operations</p>
          <h1>Hello, I&apos;m {name}</h1>
          <p className='hero-intro'>
            {landingIntro}
          </p>

          <div className='hero-actions'>
            <a className='btn btn-primary' href={`mailto:${email}`}>Reach Out</a>
            <a className='btn btn-secondary' href='#resume'>View Experience</a>
          </div>

          <ul className='social-pills' aria-label='External links'>
            {socialLinks.map((item) => (
              <li key={item.name}>
                <a href={item.url} target='_blank' rel='noreferrer'>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
