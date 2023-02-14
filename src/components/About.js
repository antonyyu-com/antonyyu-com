import React, { Component } from 'react'
export default class About extends Component {
  render () {
    const resumeData = this.props.resumeData
    return (
      <section id='about'>
        <div className='row'>

          <div className='three columns'>

            <img className='profile-pic' src='images/profilepic.png' alt='Antony Yu' />

          </div>

          <div className='nine columns main-col'>

            <h2>Me</h2>
            <p>
              {
                 resumeData.aboutme
               }
            </p>

            <div className='row'>

              <div className='columns contact-details'>

                <h2>Contact</h2>
                <p className='address'>
                  <span>{resumeData.name}</span>
                  <br />
                  <span>
                    {resumeData.email}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
