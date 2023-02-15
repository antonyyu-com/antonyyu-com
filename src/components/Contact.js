import React, { Component } from 'react';
export default class Contact extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              I am always looking for collaboration opportunities. Feel free to reach out!
            </p>
          </div>
        </div>
        <div className="row">
          <aside className="eight columns footer-widgets">
            <div className="widget">
              <p  className="lead">
                <a href="https://github.com/Antonomy" target="_blank"><img alt="Github" src="https://img.shields.io/badge/GitHub-41454A.svg?&style=for-the-badge&logo=Github&logoColor=white" /></a>
                <a href="https://www.linkedin.com/in/antonyyu/" target="_blank"><img alt="LinkedIn" src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" /></a>
                <a href="mailto:hello@antonyyu.com" target="_blank"><img alt="Email Me" src="https://img.shields.io/badge/Email%20me-EA4335.svg?&style=for-the-badge&logo=gmail&logoColor=white" /></a>
                <a href="https://calendly.com/antonyyu" target="_blank"><img alt="Book Time on My Calendar" src="https://img.shields.io/badge/Book%20Time%20with%20me-4285F4.svg?&style=for-the-badge&logo=googlecalendar&logoColor=white" /></a>
              </p>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}