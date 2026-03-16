import React from 'react'

function Header ({ resumeData }) {
  const { name, landingIntro, socialLinks = [] } = resumeData

  return (
    <header id='home'>
      <nav id='nav-wrap'>
        <a className='mobile-btn' href='#nav-wrap' title='Show navigation'>Show navigation</a>
        <a className='mobile-btn' href='#home' title='Hide navigation'>Hide navigation</a>
        <ul id='nav' className='nav'>
          <li className='current'><a className='smoothscroll' href='#home'>Home</a></li>
          <li><a className='smoothscroll' href='#about'>About</a></li>
          <li><a className='smoothscroll' href='#resume'>Resume</a></li>
          <li><a className='smoothscroll' href='#contact'>Contact</a></li>
        </ul>
      </nav>

      <div className='row banner'>
        <div className='banner-text'>
          <h1 className='responsive-headline'>Hello! I&apos;m {name}.</h1>
          <h3 style={{ color: '#fff', fontFamily: 'sans-serif' }}>
            {landingIntro}
          </h3>
          <hr />
          <ul className='social'>
            {socialLinks.map((item) => (
              <li key={item.name}>
                <a href={item.url} target='_blank' rel='noreferrer'>
                  <i className={item.className} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className='scrolldown'>
        <a className='smoothscroll' href='#about'><i className='icon-down-circle' /></a>
      </p>
    </header>
  )
}

export default Header
