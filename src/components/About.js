import React from 'react'

function About ({ resumeData }) {
  const { aboutMe, name, email } = resumeData

  return (
    <section id='about' className='section'>
      <div className='shell about-grid'>
        <div className='about-profile'>
          <img
            className='profile-photo'
            src='/images/profilepic.jpg'
            alt='Antony Yu'
            loading='lazy'
            decoding='async'
          />
        </div>

        <div className='about-copy'>
          <p className='section-label'>About</p>
          <h2>Building people-first products through engineering and operations.</h2>
          <p>{aboutMe}</p>

          <div className='detail-card'>
            <p className='detail-label'>Contact</p>
            <p className='detail-name'>{name}</p>
            <a className='detail-email' href={`mailto:${email}`}>{email}</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
