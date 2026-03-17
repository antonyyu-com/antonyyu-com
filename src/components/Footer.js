import React from 'react'

function Footer ({ resumeData }) {
  const { socialLinks = [], name } = resumeData

  return (
    <footer className='site-footer'>
      <div className='shell footer-inner'>
        <p>{name} · {new Date().getFullYear()}</p>
        <ul className='footer-links'>
          {socialLinks.map((item) => (
            <li key={item.name}>
              <a href={item.url} target='_blank' rel='noreferrer'>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
