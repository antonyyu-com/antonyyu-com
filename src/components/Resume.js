import React, { Component } from 'react'
export default class Resume extends Component {
  render () {
    const resumeData = this.props.resumeData
    return (
      <section id='resume'>
        <div className='row work'>
          <div className='three columns header-col'>
            <h1><span>Work</span></h1>
          </div>

          <div className='nine columns main-col'>
            {
                resumeData.work && resumeData.work.map((item) => {
                  return (
                    <div className='row item'>
                      <div className='twelve columns'>
                        <h3>{item.CompanyName}</h3>
                        <p className='info'>
                          {item.Title}
                          {item.Subtitle && <span> – <em>{item.Subtitle}</em></span>}
                          <span>&bull;</span> <em className='date'>{item.StartMonth} {item.StartYear} - {item.EndMonth} {item.EndYear}</em>
                        </p>
                        <p>
                          {item.Achievements}
                        </p>
                      </div>

                    </div>

                  )
                })
              }
          </div>
        </div>
        <div className='row education'>

          <div className='three columns header-col'>
            <h1><span>Education</span></h1>
          </div>

          <div className='nine columns main-col'>
            {
                resumeData.education && resumeData.education.map((item) => {
                  return (
                    <div className='row item'>
                      <div className='twelve columns'>
                        <h3>{item.InstitutionName}</h3>
                        <p className='info'>
                          {item.Degree}
                          {/* <span>&bull;</span> <em className='date'>{item.GraduationMonth} {item.GraduationYear}</em> */}
                        </p>
                        <p>
                          {item.Achievements}
                        </p>
                      </div>
                    </div>
                  )
                })
              }
          </div>
        </div>

        <div className='row skill'>

          <div className='three columns header-col'>
            <h1><span>Skills</span></h1>
          </div>

          <div className='nine columns main-col'>

            <p>
              {resumeData.skillsDescription}
            </p>

            <div className='bars'>

              <ul className='skills'>
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return (
                      <li>
                        <span className={`bar-expand ${item.skillname.toLowerCase()}`} /><em>{item.skillname}</em>
                      </li>
                    )
                  })
                }

              </ul>

            </div>

          </div>

        </div>

      </section>
    )
  }
}
