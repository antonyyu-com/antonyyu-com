import React from 'react'

function Resume ({ resumeData }) {
  const {
    work = [],
    education = [],
    skills = [],
    skillsDescription
  } = resumeData

  return (
    <section id='resume'>
      <div className='row work'>
        <div className='three columns header-col'>
          <h1><span>Work</span></h1>
        </div>

        <div className='nine columns main-col'>
          {work.map((item) => (
            <div className='row item' key={`${item.companyName}-${item.title}-${item.startYear}`}>
              <div className='twelve columns'>
                <h3>
                  {item.companyName}
                  {item.subtitle && <span className='info'> - <em>{item.subtitle}</em></span>}
                </h3>
                <p className='info'>
                  {item.title}
                  <span>&bull;</span>{' '}
                  <em className='date'>
                    {item.startMonth} {item.startYear} - {item.endMonth} {item.endYear}
                  </em>
                </p>
                <p>{item.achievements}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='row education'>
        <div className='three columns header-col'>
          <h1><span>Education</span></h1>
        </div>

        <div className='nine columns main-col'>
          {education.map((item) => (
            <div className='row item' key={`${item.institutionName}-${item.degree}-${item.graduationYear}`}>
              <div className='twelve columns'>
                <h3>{item.institutionName}</h3>
                <p className='info'>{item.degree}</p>
                <p>{item.achievements}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='row skill'>
        <div className='three columns header-col'>
          <h1><span>Skills</span></h1>
        </div>

        <div className='nine columns main-col'>
          <p>{skillsDescription}</p>

          <div className='bars'>
            <ul className='skills'>
              {skills.map((item) => (
                <li key={item.skillName}>
                  <span className={`bar-expand ${item.skillName.toLowerCase()}`} />
                  <em>{item.skillName}</em>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
