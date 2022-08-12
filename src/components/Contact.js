import React from 'react'

import { useState } from 'react';
import { send } from 'emailjs-com';

export default function Contact() {

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
      'service_43tjxmv',
      'template_ymwiygw',
      toSend,
      'PU0aLFliQfY6ZA1hA'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });

      setToSend({ name: '', email: '', message: '' });
  }

  return (
    <section className='centered-section'>

      <div className="section-title">
        <h2>contact</h2>
        <div className="title-line"></div>
      </div>

      <div className="form-container">
        <h3>Get in touch</h3>

        <form onSubmit={onSubmit}>
          <input type="text" name='name' placeholder='Name' value={toSend.name} onChange={handleChange} />
          <input type="text" name='email' placeholder='E-mail' value={toSend.email} onChange={handleChange} />
          <textarea type="text" name='message' placeholder='Message...' value={toSend.message} onChange={handleChange} />

          <button type='submit'>Submit</button>
        </form>
      </div>

    </section>
  )
}