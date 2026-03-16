import React from 'react'

function Footer ({ resumeData }) {
  const { socialLinks = [] } = resumeData

  return (
    <footer>
      <div className='row'>
        <div className='twelve columns'>
          <ul className='social-links'>
            {socialLinks.map((item) => (
              <li key={item.name}>
                <a href={item.url} target='_blank' rel='noreferrer'>
                  <i className={item.className} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div id='go-top'><a className='smoothscroll' title='Back to Top' href='#home'><i className='icon-up-open' /></a></div>
      </div>
    </footer>
  )
}

export default Footer
