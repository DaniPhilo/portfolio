import React, { useState } from 'react'

export default function Icons_sidebar() {

    const [windowSize, setWindowSize] = useState('');

    const updateWindowWidth = () => {
        setWindowSize(window.innerWidth);
    }

    window.addEventListener('resize', updateWindowWidth);

    const toGitHub = () => {
        return window.open("https://github.com/DaniPhilo?tab=repositories");
    }

    const toLinkedIn = () => {
        return window.open("https://www.linkedin.com/in/daniel-carrasco-casado/");
    }

    return (
        <aside className={`${windowSize > 769 ? 'full-sidebar' : 'mobile-sidebar'}`}>

            <ul className='icons-container'>
                <li>
                    <a href="https://github.com/DaniPhilo" target="_blank"><i className="fa-brands fa-github" onClick={toGitHub}></i></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/daniel-carrasco-casado/" target="_blank"><i className="fa-brands fa-linkedin" onClick={toLinkedIn}></i></a>
                </li>
                <li><div id='icons-line'></div></li>
            </ul>

        </aside>
    )
}
