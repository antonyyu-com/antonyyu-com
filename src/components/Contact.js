import React, { Component } from 'react'
export default class Contact extends Component {
  render () {
    const resumeData = this.props.resumeData
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
                {
                resumeData.contactBadge && resumeData.contactBadge.map((badge) => {
                  return (
                    <a href={badge.url} target='_blank' rel='noreferrer'><img alt={badge.name} src={badge.img} /></a>
                  )
                })
              }
              </p>
            </div>
          </aside>
        </div>
      </section>
    )
  }
}
