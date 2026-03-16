import React from 'react'

function About ({ resumeData }) {
  const { aboutMe, name, email } = resumeData

  return (
    <section id='about'>
      <div className='row'>
        <div className='three columns'>
          <img
            className='profile-pic'
            src='images/profilepic.jpg'
            alt='Antony Yu'
            loading='lazy'
            decoding='async'
          />
        </div>

        <div className='nine columns main-col'>
          <h2>Me</h2>
          <p>{aboutMe}</p>

          <div className='row'>
            <div className='columns contact-details'>
              <h2>Contact</h2>
              <p className='address'>
                <span>{name}</span>
                <br />
                <span>{email}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
