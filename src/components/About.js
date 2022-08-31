import React from 'react'

export default function About() {
  return (
    <section className="centered-section" id='about-section'>
      <div className="section-title">
        <h2>about</h2>
        <div className="title-line"></div>
      </div>

      <div className="about-container">
        <div className='about-img'></div>

        <div className="about-description">
          I first came into contact with basic web programming during college, and I fell in love with software development immediately. I was determined to pursue a career in this field, and to do so, I started learning by myself, and then I enrolled in a Full Stack Bootcamp to complete my education. Now, I am actively seeking to find a job as a web programmer and keep growing as a developer.
        </div>
        <div className="about-skills">
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>SQL</li>
            <li>Docker</li>
            <li>CI / CD</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
