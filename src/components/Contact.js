import React from 'react'

function Contact ({ resumeData }) {
  const { contactBadges = [] } = resumeData

  return (
    <section id='contact'>
      <div className='row section-head'>
        <div className='ten columns'>
          <p className='lead'>
            I am always looking for collaboration opportunities. Feel free to reach out!
          </p>
        </div>
      </div>
      <div className='row'>
        <aside className='eight columns footer-widgets'>
          <div className='widget'>
            <p className='lead'>
              {contactBadges.map((badge) => (
                <a href={badge.url} key={badge.name} target='_blank' rel='noreferrer'>
                  <img alt={badge.name} src={badge.img} loading='lazy' decoding='async' />
                </a>
              ))}
            </p>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Contact
