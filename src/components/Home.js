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
                <div className="home-title">HOME</div>
            }

        </section>
    )
}
