import React, { useState } from 'react'
import { ReactComponent as SVG } from '../assets/svg-test.svg'

export default function Home() {

    const [windowSize, setWindowSize] = useState('');

    const updateWindowSize = () => {
        setWindowSize(window.innerWidth);
    }

    window.addEventListener('resize', updateWindowSize);

    return (
        <section className='centered-section' id='home-section' name='home-section'>
            {windowSize > 550 ?
                <div className='triangles-container'>
                    <SVG />
                </div>
                :
                <div className="home-title">
                    <div className="title1">
                       <h1>Hi, I'm</h1>
                       <h1>Daniel Carrasco</h1>
                    </div>
                    <div className="title2">
                       <h1>Full-Stack Developer</h1>
                    </div>
                    <a href="#projects-section">Check out my work!</a>
                </div>
            }

        </section>
    )
}
