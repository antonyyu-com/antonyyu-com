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
            <aside className="eigth columns footer-widgets">
              <div className="widget">
              <h4>Email:&nbsp;
                  {resumeData.email}
                </h4>
                <h4>LinkedIn:&nbsp;
                  {resumeData.linkedinLink}
                </h4>
                <h4>GitHub:&nbsp;
                  {resumeData.githubLink}
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}