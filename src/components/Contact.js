import React, { useState } from 'react'

function Contact ({ resumeData }) {
  const { contactBadges = [], email, formspreeEndpoint } = resumeData
  const [status, setStatus] = useState('idle')

  async function handleSubmit (event) {
    event.preventDefault()

    if (!formspreeEndpoint) return

    const formElement = event.currentTarget
    const data = new FormData(formElement)

    try {
      setStatus('submitting')

      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json'
        }
      })

      if (!response.ok) {
        throw new Error('Submission failed')
      }

      formElement.reset()
      setStatus('success')
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <section id='contact' className='section'>
      <div className='shell contact-panel'>
        <div>
          <p className='section-label'>Contact</p>
          <h2>Let&apos;s build something meaningful together.</h2>
          <p className='contact-copy'>
            I am always looking for collaboration opportunities. Feel free to reach out!
          </p>

          {status === 'success'
            ? (
              <div className='thank-you' role='status' aria-live='polite'>
                <p className='thank-you-title'>Thank you, your message is on its way.</p>
                <p>I appreciate you reaching out and I will follow up as soon as I can.</p>
                <button className='btn btn-secondary' type='button' onClick={() => setStatus('idle')}>
                  Send Another Message
                </button>
              </div>
              )
            : (
              <form
                className='contact-form'
                method='POST'
                onSubmit={handleSubmit}
              >
                <label htmlFor='name'>Name</label>
                <input id='name' name='name' type='text' required />

                <label htmlFor='email'>Email</label>
                <input id='email' name='email' type='email' required />

                <label htmlFor='message'>Message</label>
                <textarea id='message' name='message' rows='4' required />

                <input type='hidden' name='_subject' value='New message from antonyyu.com' />

                <div className='contact-form-actions'>
                  <button className='btn btn-primary' type='submit' disabled={status === 'submitting' || !formspreeEndpoint}>
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                  <a className='btn btn-secondary' href={`mailto:${email}`}>Email Instead</a>
                </div>

                {status === 'error'
                  ? (
                    <p className='contact-note contact-note-error'>
                      Something went wrong sending your message. Please try again or email me directly.
                    </p>
                    )
                  : null}
              </form>
              )}

          {!formspreeEndpoint ? (
            <p className='contact-note'>
              Set your Formspree endpoint in resumeData.js to activate form delivery.
            </p>
          ) : null}
        </div>

        <ul className='contact-links'>
          {contactBadges.map((badge) => (
            <li key={badge.name}>
              <a href={badge.url} target='_blank' rel='noreferrer'>
                {badge.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Contact
