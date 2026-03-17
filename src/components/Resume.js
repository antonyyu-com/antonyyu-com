import React from 'react'

function Resume ({ resumeData }) {
  const {
    work = [],
    education = [],
    skills = [],
    skillsDescription
  } = resumeData

  return (
    <section id='resume' className='section section-resume'>
      <div className='shell'>
        <div className='section-heading'>
          <p className='section-label'>Resume</p>
          <h2>Experience, education, and technical toolkit.</h2>
        </div>

        <div className='resume-layout'>
          <article className='resume-block'>
            <h3>Work</h3>
            <div className='resume-list'>
              {work.map((item) => (
                <section className='resume-item' key={`${item.companyName}-${item.title}-${item.startYear}`}>
                  <p className='item-date'>
                    {item.startMonth} {item.startYear} - {item.endMonth} {item.endYear || ''}
                  </p>
                  <h4>{item.title}</h4>
                  <p className='item-company'>{item.companyName}</p>
                  {item.subtitle ? <p className='item-subtitle'>{item.subtitle}</p> : null}
                  {item.achievements ? <p>{item.achievements}</p> : null}
                </section>
              ))}
            </div>
          </article>

          <article className='resume-block'>
            <h3>Education</h3>
            <div className='resume-list'>
              {education.map((item) => (
                <section className='resume-item' key={`${item.institutionName}-${item.degree}-${item.graduationYear}`}>
                  <p className='item-date'>
                    {item.graduationMonth} {item.graduationYear}
                  </p>
                  <h4>{item.institutionName}</h4>
                  <p className='item-company'>{item.degree}</p>
                  {item.achievements ? <p>{item.achievements}</p> : null}
                </section>
              ))}
            </div>
          </article>
        </div>

        <div className='skills-wrap'>
          <p className='section-label'>{skillsDescription}</p>
          <ul className='skill-tags'>
            {skills.map((item) => (
              <li key={item.skillName}>{item.skillName}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Resume
