import React from 'react'

export default function About() {
  return (
    <section className="centered-section">
      <div className="section-title">
        <h2>about</h2>
        <div className="title-line"></div>
      </div>

      <div className="about-container">
        <div className='about-img'></div>

        <div className="about-description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus consequatur hic quas! Veritatis unde ab dolore nemo, enim sequi aliquam deleniti, atque molestiae quos nulla minima eveniet commodi. Distinctio, atque vel saepe quod adipisci necessitatibus cumque amet minus iste officia fuga soluta magnam fugit veniam illo dolorum nisi vitae accusantium.
        </div>
        <div className="about-skills">
          <ul>
            <li>react</li>
            <li>redux</li>
            <li>node.js</li>
            <li>express</li>
            <li>mongoDB</li>
            <li>SQL</li>
            <li>docker</li>
            <li>CI / CD</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
