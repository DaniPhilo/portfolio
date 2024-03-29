import React from 'react'

import { useState } from 'react';
import { send } from 'emailjs-com';

export default function Contact() {

  const [emailSent, setEmailSent] = useState(false);
  const [success, setSuccess] = useState(false);

  const [toSend, setToSend] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      process.env.REACT_APP_EMAIL_SERVICE,
      process.env.REACT_APP_EMAIL_TEMPLATE,
      toSend,
      process.env.REACT_APP_EMAIL_KEY
    )
      .then((response) => {
        setEmailSent(true);
        setSuccess(true);
        document.body.style.overflow = 'hidden';
        console.log('E-mail sent successfully', response.status, response.text);
      })
      .catch((err) => {
        setEmailSent(true);
        document.body.style.overflow = 'hidden';
        console.log('Sending e-mail failed', err);
      });

    setToSend({ name: '', email: '', message: '' });
  }

  const hideModule = () => {
    setEmailSent(false);
    setSuccess(false);
    document.body.style.overflow = 'auto';
  }

  return (
    <section className='centered-section' id='contact-section'>

      <div className="section-title">
        <h2>contact</h2>
        <div className="title-line"></div>
      </div>

      <div className="form-container">
        <h3>Get in touch</h3>
        <p>Do you have a question or want to work together? <br></br>You can contact me through this formulary.*</p>

        <form onSubmit={onSubmit}>
          <input type="text" name='name' placeholder='Name' value={toSend.name} onChange={handleChange} />
          <input type="text" name='email' placeholder='E-mail' value={toSend.email} onChange={handleChange} />
          <textarea type="text" name='message' placeholder='Message...' value={toSend.message} onChange={handleChange} />

          <button type='submit'>Submit</button>
        </form>
        <p>*Your email information <span>will not</span> be stored in any database or sold to any third parties. It will be used only to answer you back.</p>
      </div>

      <div className={emailSent ? "success-module-container" : "hidden"}>
        {/* <div className="success-module-container"> */}
        <div className="success-module">
          <h3>{success ? 'Email sent successfully' : 'An error ocurred. Please, try again later'}</h3>
          <button type='button' onClick={hideModule}>OK</button>
        </div>
      </div>

    </section>
  )
}